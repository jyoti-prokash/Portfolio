import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import callIcon from "../../assets/contactIcon/telephone (1).png";
import mailIcon from "../../assets/contactIcon/mail (1).png";
import locationIcon from "../../assets/contactIcon/location.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Successfully Sent");

          // Reset the form after success
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send. Please try again.");
        }
      );
  };
  return (
    <div
      id="contact"
      className="min-h-screen bg-[#F6F3FC] flex items-center justify-center"
    >
      <section className="p-10 max-w-7xl w-full grid md:grid-cols-2 lg:gap-20 gap-10 items-center">
        {/* Right Section - Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white p-10 rounded-2xl"
        >
          <h2 className="text-4xl font-bold text-purple-700">
            Let’s work together!
          </h2>
          <p className="text-gray-600 mt-4">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
          <div className="gap-4">
            <input
              type="text"
              required
              name="from_name"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border border-[#442582]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              required
              name="email"
              placeholder="Email address"
              className="w-full p-3 rounded-lg border border-[#442582]"
            />
            <input
              type="text"
              required
              placeholder="Phone number"
              name="number"
              className="w-full p-3 rounded-lg border border-[#442582]"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Message"
            name="message"
            className="w-full p-3 rounded-lg border border-[#442582]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800"
          >
            Send Email
          </button>
        </form>
        {/* Left Section */}
        <div>
          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full">
                <img className="w-10" src={callIcon} alt="callIcon" />
              </div>
              <p className="text-gray-700 text-xl hover:text-[#3A1F71] font-semibold">
                Phone: +8801746153493
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full">
                <img className="w-10" src={mailIcon} alt="mailIcon" />
              </div>
              <p className="text-gray-700 text-xl hover:text-[#3A1F71] font-semibold">
                Email: jyotiprokash@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full">
                <img className="w-10" src={locationIcon} alt="callIcon" />
              </div>
              <p className="text-gray-700 text-xl hover:text-[#3A1F71] font-semibold">
                Address: Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
