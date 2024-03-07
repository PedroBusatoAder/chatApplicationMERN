import mongoose from "mongoose";

const ChatSchema = mongoose.Schema({
    chatName: {
        type: String,
        required: true,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true }
)

export default mongoose.model('chat', ChatSchema); // Trying to solve the problem

// const ChatModel = mongoose.model('Chat', ChatSchema);

// module.exports = ChatModel;