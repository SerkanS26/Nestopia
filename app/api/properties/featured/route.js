import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/featured
export const GET = async (request) => {
  try {
    await connectDB();

    // Get featured properties
    const properties = await Property.find({
      is_featured: true,
    });

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response("Someting went wrong", { status: 500 });
  }
};
