import Image from 'next/image'
import React from 'react'

export const ContactFormSection = () => {
  return (
     <section id='contact' className="w-full py-16 mt-10 border-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        {/* Form */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-sm text-gray-600">Need help?</h3>
            <h2 className="text-2xl font-semibold mt-1">Let's have a conversation!</h2>
          </div>

          <input
            name="username"
            type="text"
            className="input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:outline-none"
            placeholder="Enter your name"
          />

          <input
            name="email"
            type="email"
            className="input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:outline-none"
            placeholder="Enter your email address"
          />

          <textarea
            name="message"
            className="input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:outline-none h-32 resize-none"
            placeholder="Tell me more about your project"
          />

          <button className="btn btn-dash border-2">
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
