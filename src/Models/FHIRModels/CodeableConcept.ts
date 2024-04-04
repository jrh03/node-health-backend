import mongoose from 'mongoose';
import Coding from './Coding';

export default new mongoose.Schema({
    coding: {
        type: [Coding],
        default: void 0
    }
}, {
    _id: false
});