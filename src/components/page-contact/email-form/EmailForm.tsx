'use client'

import React, { useState, FormEvent } from 'react'
import { IoMdSend } from 'react-icons/io'
import axios from 'axios'

const EmailForm = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [feedback, setFeedback] = useState<string>('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axios.post('/api/emailJs', {
                name,
                email,
                message,
                phoneNumber
            })
            console.log('Email sent successfully!', response.data)
            setFeedback('Email sent successfully!')
            setName('')
            setEmail('')
            setMessage('')
            setPhoneNumber('')
        } catch (error) {
            console.error('Error sending email:', error)
            setFeedback('Failed to send email. Please try again later.')
        }
    }

    return (
        <div className="bg-foreground-light dark:bg-foreground-dark p-4 shadow-xl rounded-lg">
            <form onSubmit={handleSubmit} className="">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-1 text-sm font-semibold text-text-dark dark:text-text-light">
                        Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark dark:text-text-light w-full p-3 rounded-md border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-1 text-sm font-semibold text-text-dark dark:text-text-light">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark dark:text-text-light w-full p-3 rounded-md border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="phoneNumber" className="block mb-1 text-sm font-semibold text-text-dark dark:text-text-light">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark dark:text-text-light w-full p-3 rounded-md border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        type="text"
                        placeholder="Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="block mb-1 text-sm font-semibold text-text-dark dark:text-text-light">
                        Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark dark:text-text-light w-full p-3 min-h-20 max-h-40 resize-none border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 rounded-md"
                        value={message}
                        placeholder="Your Message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button
                    className="bg-button-light dark:bg-button-dark mb-2 text-text-light w-full py-3 rounded-lg shadow-lg hover:underline hover:cursor-pointer transition-all duration-300 ease-in-out flex flex-row justify-center items-center"
                    type="submit"
                    value="Send"
                >
                    Send <IoMdSend className="ml-2" />
                </button>

                {/* Feedback Message */}
                {feedback && <p className="mt-4 text-sm text-green-500 dark:text-green-400">{feedback}</p>}
            </form>
        </div>

    )
}

export default EmailForm
