import mongoose from "mongoose";
// We should add an encryptation mechanism for our password!


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true,
        default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
    { timestamps : true }
)

const User = mongoose.model('User', UserSchema);

module.exports = User;