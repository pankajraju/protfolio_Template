"use client";
import React from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import sendEmailPng from "../../assets/send-email.png";
import { useState } from "react";
const Contact = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(reult.text);
          alert("Email sent succesfully!");
        },
        (error) => {
          console.log(error.text);
          alert("failed to send email.");
        }
      );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-black py-24 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* form sction  */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-primary/45 p-8 rounded-xl w-full max-w-lg"
          >
            <h2 className="text-2xl mb-4">Get In Touch</h2>
            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={FormData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-ocupacity-50 ring-primary bg-black text-white"
              />
            </div>
            <label htmlFor="email">Email</label>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-ocupacity-50 ring-primary bg-black text-white"
              />
            </div>
            <label htmlFor="message">Message</label>
            <div className="mb-4">
              <textarea
                name="message"
                value={FormData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-ocupacity-50 ring-primary bg-black text-white"
              />
            </div>
            <button type="submit" className="btn mt-4 px-8">
              Send Email
            </button>
          </form>
        </div>

        {/* contact image section  */}
        <div className="hidden md:flex justify-center items-center">
          <Image
            src={sendEmailPng}
            alt="send email"
            className="w-[300px] animate-rocket"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Contact;
