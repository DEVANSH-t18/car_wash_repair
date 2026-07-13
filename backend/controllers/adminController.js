import Booking from '../models/booking.js';

export const getAllBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find().sort({ createdAt: -1 });
    return res.status(200).json(allBookings);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};