import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  vehicle: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  bookingTime: { type: String, required: true }, 
  reachTime: { type: String, required: true }    
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);