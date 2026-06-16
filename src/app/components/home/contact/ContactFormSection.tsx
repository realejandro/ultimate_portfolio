
'use client'
import Image from 'next/image'
import React, { useState } from 'react'


type MessageProps =  {
  "fullname":string;
  "email":string;
  "message":string
}

export const ContactFormSection = () => {

  const [ message, setMessage ] = useState<MessageProps>({
    fullname: "",
    email: "",
    message: ""
  });

   const handleSubmit = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });

    const data = await res.json()
    
    console.log(data)


  };

  return (
     <section id='contact' className="w-full py-16 mt-10 border-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        {/* Form */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-sm text-gray-600">Need help?</h3>
            <h2 className="text-2xl font-semibold mt-1">{"Let's have a conversation!"}</h2>
          </div>

          <input
            name="username"
            type="text"
            className="input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:outline-none"
            placeholder="Enter your name"
            value={message.fullname}
            onChange={(e) =>
              setMessage({
                ...message,
                fullname: e.target.value
              })
            } 
          />

          <input
            name="email"
            type="email"
            className="input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:outline-none"
            placeholder="Enter your email address"
            value={message.email}
            onChange={(e) =>
              setMessage({
                ...message,
                email: e.target.value
              })
            }
          />

          <textarea
            name="message"
            className="input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:outline-none h-32 resize-none"
            placeholder="Tell me more about your project"
            value={message.message}
            onChange={ (e) =>
              setMessage({
                ...message,
                message: e.target.value
              })
            }
          />

          <button onClick={handleSubmit} className="btn btn-dash border-2">
            Contact
          </button>
        </div>

        {/* Image */}
        <div className="w-full h-80 relative rounded-lg overflow-hidden">
          <Image
            src="/assets/images/home/chicago.avif"
            alt="Chicago skyline"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
