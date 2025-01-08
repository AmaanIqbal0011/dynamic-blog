import React from 'react'
import { Button } from './ui/button'

const Feedback = () => {
  return (
    <section className="text-gray-600 body-font relative bg-gray-100 dark:bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200">
        Give Feedback
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200">
      "We value your thoughts! Read what others have shared and leave your feedback.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder='Full Name'
              required
              name="name"
              className="w-full bg-gray-100 dark:bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full bg-gray-100 dark:bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              className="w-full bg-gray-100 dark:bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
         <Button className="flex mx-auto text-lg" variant="outline">Thank for Feedback</Button>
           
         
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Feedback