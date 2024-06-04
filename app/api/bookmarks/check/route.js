import connectDB from "@/config/database";
import User from "@/models/User";

import { getSessionUser } from "@/utils/getSessionUser";

export const POST = async (request) => {
  try {
    await connectDB();
    const { PropertyId } = await request.json();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { userId } = sessionUser;

    //Find the user in the database
    const user = await User.findById({ _id: userId });

    // Check if the property is bookmarked
    let isBookmarked = user.bookmarks.includes(PropertyId);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
