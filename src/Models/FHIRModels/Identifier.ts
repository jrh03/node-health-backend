import mongoose from 'mongoose';
import Period from "./Period";

export default new mongoose.Schema({
    use: {
        type: Boolean,
        default: void 0
    },
    text: {
        type: String,
        default: void 0
    },
    family: {
        type: String,
        default: void 0
    },
    given: {
        type: [String],
        default: void 0
    },
    prefix: {
        type: [String],
        default: void 0
    },
    suffix: {
        type: [String],
        default: void 0
    },
    period: {
        type: Period,
        default: void 0
    }
}, {
    _id: false
});