"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const dynamoose_1 = require("dynamoose");
const UserSchema = new dynamoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        default: 'New User',
    },
    email: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});
exports.UserModel = (0, dynamoose_1.model)('User', UserSchema);
