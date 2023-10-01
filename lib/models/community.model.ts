import mongoose from "mongoose";
import { object } from "zod";

const communitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  image: String,
  bio: String,
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  members:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  ]
  
});

const Community = mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;