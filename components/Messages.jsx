"use client";

import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import Message from "@/components/Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch("/api/messages", { cache: "no-cache" });

        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.error("Error fetching messages: ", error);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, []);
  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="bg-softGreen">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-2xl text-center text-gray-600 font-bold mb-4 md:text-3xl md:text-left">
            Your Messages
          </h1>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-lg text-red-400 font-bold italic text-left mt-2">
                {" "}
                You have no messages !
              </p>
            ) : (
              messages.map((message) => (
                <Message key={message._id} message={message} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
