import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
});


const publicToolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    coverImage:{
        type: String,
        required: true,
        default: "https://via.placeholder.com/150"
    },
    description:{
        type: String,
        required: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    link:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true,
        enum: ["draft", "published", "archived"],
        default: "draft"
    },
    verified:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }

});


export const Category =  mongoose.models.Category || mongoose.model('Category', categorySchema)
export default mongoose.models.PublicTool || mongoose.model('PublicTool', publicToolSchema)