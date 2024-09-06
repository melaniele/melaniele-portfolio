"use client";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contactForm, contacts } from "../lib/data";

export default function Contacts() {
  const [isSending, setIsSending] = useState(false);
  const [emailResult, setEmailResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    const jsonData = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    };

    try {
      setEmailResult("");
      setIsSending(true);
      const response = await fetch(endpoint, options);
      console.log("Fetch response:", response); // Log the response status
      setIsSending(false);

      if (response.ok) {
        setEmailResult(
          "Thank you for your time! I have received your email, I'll make sure to get back to you ASAP!"
        );
        console.log("Email sent successfully!");
      } else {
        setEmailResult(
          "Sorry for this inconvenience, there's an error sending your email. Please feel free to reach out to me on LinkedIn, GitHub, or my personal Email (lethihongminh123@gmail.com). Thank you!"
        );
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div id="contacts" className="py-20 dark:text-white">
      <p className="text-5xl font-bold text-rose"> Contacts </p>
      <section className="grid md:grid-cols-2 my-5 md:my-5 py-5 gap-3">
        <div>
          <h5 className="text-2xl font-bold my-2">Let&apos;s Connect</h5>
          <p className="text-gray mb-4 max-w-md lg:pb-10">
            I’m excited to connect and explore new ideas together. Feel free to
            reach out and let’s start a conversation!
          </p>
          <div className="socials flex lg:flex-col md:flex-row gap-7">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex lg:flex-row md:flex-col gap-5 items-center"
              >
                <Link href={contact.link} target="_blank">
                  <Image
                    src={contact.icon}
                    alt={contact.alt}
                    width={50}
                    height={50}
                  />
                </Link>
                <p className="text-lg text-gray italic content-center hidden lg:flex">
                  {contact.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            {contactForm.map((contactInfo, index) => (
              <div className="mb-3" key={index}>
                <label
                  htmlFor={contactInfo.id}
                  className="block mb-1 text-lg font-medium"
                >
                  {contactInfo.label}
                </label>
                {contactInfo.inputType == "input" ? (
                  <input
                    name={contactInfo.type}
                    type={contactInfo.type}
                    id={contactInfo.id}
                    required
                    className="border border-gray placeholder-gray text-black text-sm rounded-xl block w-full p-2.5 
                              dark:bg-black dark:text-white"
                    placeholder={contactInfo.placeholder}
                  />
                ) : (
                  <textarea
                    name={contactInfo.type}
                    id={contactInfo.id}
                    required
                    className="border border-gray placeholder-gray text-black text-sm rounded-xl block w-full p-2.5 
                              dark:bg-black dark:text-white"
                    placeholder={contactInfo.placeholder}
                    rows={4}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-dark-rose hover:bg-red text-white font-medium py-3 px-5 rounded-lg w-full
                          focus:ring-offset-2 focus:ring-2 focus:ring-rose 
                          transition ease-in-out duration-200"
              disabled={isSending}
            >
              {"Send Message"}
            </button>

            {
              <p
                className="text-dark-rose font-semibold text-center italic text-xl mt-2
                              dark-text-white"
              >
                {emailResult}
              </p>
            }

            {isSending && (
              <div className="flex justify-center my-5">
                <CircularProgress
                  size="md"
                  color="warning"
                  label="Please wait, email is sending..."
                />
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
