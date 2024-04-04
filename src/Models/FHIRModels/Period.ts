import mongoose from 'mongoose';

export default new mongoose.Schema({
    start: {
        type: Date,
        default: void 0
    },
    end: {
        type: Date,
        default: void 0
    }
}, {
    _id: false
});