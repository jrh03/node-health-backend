import mongoose from 'mongoose';
import Reference from './Reference';

export default new mongoose.Schema({
    other: {
        type: Reference,
        default: void 0
    },
    type: {
        type: String,
        default: void 0
    }
}, {
    _id: false
});