import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

// GET /api/messages
export const GET = async (request) => {
  try {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "Unauthorized!, You must be logged in to view messages",
        }),
        { status: 401 }
      );
    }

    const { userId } = sessionUser;

    const messages = await Message.find({ recipient: userId })
      .populate("sender", "username")
      .populate("property", "name");

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};

// POST /api/messages
export const POST = async (request) => {
  try {
    await connectDB();
    const { name, email, phone, message, property, recipient } =
      await request.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "Unauthorized!, You must be logged in to send a message",
        }),
        { status: 401 }
      );
    }

    const { userId } = sessionUser;

    // Can not send message to self
    if (userId === recipient) {
      return new Response(
        JSON.stringify({ message: "Can not send a message to yourself" }),
        { status: 400 }
      );
    }

    const newMessage = new Message({
      sender: userId,
      recipient,
      property,
      name,
      email,
      phone,
      body: message,
    });

    await newMessage.save();

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};
