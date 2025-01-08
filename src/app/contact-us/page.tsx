import React from 'react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <div className="container mx-auto p-6 ">
  <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-900 border border-gray-400 p-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" htmlFor="fullName">
        Full Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Full Name" required />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" htmlFor="fatherName">
        Father Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fatherName" type="text" placeholder="Father's Name" required />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" htmlFor="dob">
        Date of Birth
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" required />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Gender</label>
      <div className="flex items-center">
        <label className="mr-4">
          <input type="radio" name="gender" value="male" className="mr-1" required /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" className="mr-1" required /> Female
        </label>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" htmlFor="email">
        Email Address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="you@example.com" required />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" htmlFor="message">
        Message
      </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here..." required></textarea>
    </div>
    <div className="flex items-center justify-between">
      <Button className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" variant="outline">
        Submit
      </Button>
    </div>
  </form>
  <div className="flex justify-center space-x-4 mt-6">
    <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
    <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
    <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
    <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
  </div>
</div>
  )
}

export default Contact