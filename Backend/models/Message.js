import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: false
    },
    readBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }
},
    { timestamps: true }
)

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
