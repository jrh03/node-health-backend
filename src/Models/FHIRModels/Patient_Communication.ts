import mongoose from 'mongoose';

export default new mongoose.Schema({
    preferred: {
        type: Boolean,
        default: void 0
    }
}, {
    _id: false
});