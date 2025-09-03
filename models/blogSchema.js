import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    heading: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    slug: { type: String, unique: true, required: true },
    metaTitle: { type: String, required: true, maxlength: 60 },
    metaDescription: { type: String, required: true, maxlength: 160 },
  },
  { timestamps: true }
);


const Blog = models.Blog || model("Blog", BlogSchema);
export default Blog;
