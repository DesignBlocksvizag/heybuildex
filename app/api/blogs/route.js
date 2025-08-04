import connectDB from "@/config";
import Blog from "@/models/blogSchema";
import fs from "fs";
import path from "path";
// export const dynamic = "force-static"
export const dynamic = "force-dynamic";
function saveBase64Image(base64, filename) {
  const folder = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  const data = base64.replace(/^data:image\/\w+;base64,/, "");
  fs.writeFileSync(path.join(folder, filename), Buffer.from(data, "base64"));
  return `/uploads/${filename}`;
}


const headers = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// GET: Fetch all blogs with search and pagination
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return Response.json({ blogs }, { status: 200, headers });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500, headers });
  }
}



export async function POST(req) {
  await connectDB();
  const body = await req.json(); // { heading, description, imageBase64 }
  const imageUrl = body.imageBase64
    ? saveBase64Image(body.imageBase64, `blog_${Date.now()}.jpg`)
    : null;
  const blog = await Blog.create({
    heading: body.heading,
    description: body.description,
    image: imageUrl,
    slug: body.slug,
  });
  return Response.json(blog);
}

// PUT → Update
export async function PUT(req) {
  await connectDB();
  const id = new URL(req.url).searchParams.get("id");
  const body = await req.json(); // { heading, description, imageBase64 }
  const data = { heading: body.heading, description: body.description ,slug:body.slug};
  if (body.imageBase64)
    data.image = saveBase64Image(body.imageBase64, `blog_${Date.now()}.jpg`);
  const blog = await Blog.findByIdAndUpdate(id, data, { new: true });
  return Response.json(blog);
}
// DELETE: Delete blog by ID (expects ?id=blogId)
export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ error: "Blog ID is required" }, { status: 400, headers });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return Response.json({ error: "Blog not found" }, { status: 404, headers });
    }

    return Response.json({ message: "Blog deleted successfully" }, { status: 200, headers });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500, headers });
  }
}
