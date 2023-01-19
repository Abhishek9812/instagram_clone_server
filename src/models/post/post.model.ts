import { BaseModel } from "../basemodel";
import { Document, Schema, model, Types } from "mongoose"


export interface ICreatePost extends Document {
    _id: Types.ObjectId;
    images: Array<String>,
    likeCount: number,
    author: Object,
    likedUsers: Array<Object>
}

export class CreatePost extends BaseModel {
    _id?: Types.ObjectId;
    images?: Array<String>;
    likeCount?: number;
    author?: Object;
    likedUsers?: Array<Object>
}

const CreatePostSchema: Schema = new Schema({
    likeCount:{
        type: Number,
        default: 0,
    },
    author:{
        type: Object
    },
    images: {
        type: Array,
    },
    likedUsers: {
        type: Array,
        default: []
    },

}, { timestamps: true });


export const createPostModel = model<CreatePost>('posts', CreatePostSchema)
