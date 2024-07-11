"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "380a7be3-513f-4536-93f8-ff97f366cad3",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();

    if (result.success) {
      console.log(result);
      setShowErrorMsg(false);
      setShowSuccessMsg(true);
      setLoading(false);
    } else {
      setShowErrorMsg(true);
      setLoading(false);
    }
  }

  return (
    <div>
      {!showSuccessMsg && (
        <div className="mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="380a7be3-513f-4536-93f8-ff97f366cad3"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Syntri.us"
            />
            <input
              type="hidden"
              name="from_name"
              value="Contact Form Notifications"
            />

            <div className="flex gap-4">
              <div className="w-1/2 flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Smith"
                  className="w-full p-2 border border-secondary-grey rounded-xl"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  className="w-full p-2 border border-secondary-grey rounded-xl"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                cols={50}
                rows={4}
                className="w-full p-2 border border-secondary-grey rounded-xl"
              ></textarea>
            </div>

            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            {!loading && (
              <button
                type="submit"
                className="w-full p-3 rounded-full bg-primary-blue text-white mt-6"
              >
                Send message
              </button>
            )}

            {loading && (
              <div className="flex justify-center w-full p-3 rounded-full bg-primary-blue text-white mt-6">
                <div className="spinner" />
              </div>
            )}
          </form>
          {showErrorMsg && (
            <div className="mt-6 text-center text-red-600 font-medium">
              There has been an error submitting the form. Please try again.
            </div>
          )}
        </div>
      )}
      {showSuccessMsg && (
        <div className="mx-auto">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h4 className="mt-2 mb-4 text-center w-full">Success</h4>
          <p className="text-center w-1/2 mx-auto">
            Thank you for reaching out! <br></br>Your message has been received,
            and our team will be in touch with you shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
