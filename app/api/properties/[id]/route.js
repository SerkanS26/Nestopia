import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    const propertyId = params.id;

    await connectDB();

    const property = await Property.findById(propertyId);

    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response("Someting went wrong", { status: 500 });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    const propertyId = params.id;

    const sessionUser = await getSessionUser();

    //Check for session
    if (!sessionUser || !sessionUser.userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { userId } = sessionUser;

    await connectDB();

    //Find property
    const property = await Property.findById(propertyId);

    //Check if property exists
    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }

    //Verify property owner
    if (property.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    await property.deleteOne();

    return new Response("Property Deleted", {
      status: 200,
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response("Someting went wrong", { status: 500 });
  }
};
