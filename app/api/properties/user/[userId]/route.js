import connectDB from "@/config/database";
import Property from "@/models/Property";

export const dynamic = "force-dynamic";

// GET /api/properties/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const userId = params.userId;

    if (!userId) return new Response("User ID is required", { status: 400 });

    const properties = await Property.find({ owner: userId });

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response("Someting went wrong", { status: 500 });
  }
};
