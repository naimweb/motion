import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Gmail mailto link
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:naimislmmd1020@gmail.com?subject=${encodeURIComponent(
      "Message from " + name
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="max-w-[800px] mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Contact Me
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Have a question or want to work together? Send me a message!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-6">
        <a
          href="mailto:naimislmmd1020@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Or email me directly at: naimislmmd1020@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;