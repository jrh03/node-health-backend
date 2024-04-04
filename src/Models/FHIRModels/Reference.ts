import mongoose from 'mongoose';
import Identifier from './Identifier';
export default new mongoose.Schema({
    reference: {
        type: String,
        default: void 0
    },
    type: {
        type: String,
        default: void 0
    },
    identifier: {
        type: Identifier,
        default: void 0
    },
    display: {
        type: String,
        default: void 0
    }
}, {
    _id: false
});