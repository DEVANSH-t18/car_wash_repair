import Booking from '../models/booking.js';
import OtpStorage from '../models/otp.js';
import nodemailer from 'nodemailer';

// Strict fallback matrix configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'radheshtiwari81@gmail.com',
    pass: process.env.EMAIL_PASS || 'jnuiscauzwmhqlor'
  }
});

// A. SEND OTP CONTROLLER
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email ID zaroori hai!" });

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    await OtpStorage.findOneAndUpdate(
      { email },
      { otp: generatedOtp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

    const mailOptions = {
      from: `"AutoCare Services" <${process.env.EMAIL_USER || 'radheshtiwari81@gmail.com'}>`,
      to: email,
      subject: '🚗 AutoCare - Verification OTP Code',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 500px;">
          <h2 style="color: #1a73e8;">AutoCare Verification</h2>
          <p>Aapke registration ke liye real OTP neeche diya gaya hai:</p>
          <div style="background-color: #f8fafc; padding: 15px; text-align: center; border-radius: 8px;">
            <span style="font-size: 28px; font-weight: 800; color: #0f172a;">${generatedOtp}</span>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 10px;">Yeh OTP 5 minute ke liye valid hai.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Real OTP aapki Email par bhej diya gaya hai!" });

  } catch (error) {
    return res.status(500).json({ message: "Email bhejane me error aayi!", error: error.message });
  }
};

// B. REGISTER CONTROLLER
export const registerUser = async (req, res) => {
  try {
    const { fullName, address, vehicle, phone, email, password, otp } = req.body;

    const userExists = await Booking.findOne({ $or: [{ email }, { phone }] });
    if (userExists) return res.status(400).json({ message: "Email ya Mobile number pehle se registered hai!" });

    const otpRecord = await OtpStorage.findOne({ email });
    if (!otpRecord || otpRecord.otp !== otp) {
      return res.status(400).json({ message: "Galat OTP ya OTP Expire ho chuka hai!" });
    }

    const randomDaysAhead = Math.floor(Math.random() * 7) + 1;
    const bookingDate = new Date();
    bookingDate.setDate(bookingDate.getDate() + randomDaysAhead);
    
    const reachTimeStr = bookingDate.toDateString(); 
    const bookingTimeStr = new Date().toLocaleString(); 

    const newUserBooking = new Booking({
      fullName, address, vehicle, phone, email, password,
      bookingTime: bookingTimeStr, reachTime: reachTimeStr
    });

    const savedUser = await newUserBooking.save();
    await OtpStorage.deleteOne({ email });
    
    return res.status(201).json({ message: "Registration Successful!", user: savedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// C. LOGIN CONTROLLER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Booking.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Galat Email ID ya Password!" });
    }
    return res.status(200).json({ message: "Login Successful.", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};