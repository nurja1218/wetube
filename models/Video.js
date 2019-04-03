import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required",
    },
    title: {
        type: String,
        required: "Title is requried"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
        // Date.now는 현재 날짜
    }
});

const model = mongoose.model("Video", VideoSchema);
export default model;