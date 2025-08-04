import connectDB from "@/config";
import Blog from "@/models/blogSchema";

const headers = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// GET: Fetch all blogs or a single blog by slug
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const blog = await Blog.findOne({ slug });
      if (!blog) {
        return Response.json({ error: "Blog not found" }, { status: 404, headers });
      }
      return Response.json({ blog }, { status: 200, headers });
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500, headers });
  }
}
