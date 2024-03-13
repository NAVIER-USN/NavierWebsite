'use client'

import React, { useState, FormEvent } from 'react'
import { IoMdSend } from 'react-icons/io'
import axios from 'axios'

const EmailForm = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axios.post('/api', {
                name,
                email,
                message,
                phoneNumber
            })
            console.log('Email sent successfully!', response.data)
            setName('')
            setEmail('')
            setMessage('')
            setPhoneNumber('')
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }

    return (
        <div className="bg-foreground-light dark:bg-foreground-dark p-4 shadow-xl">
            <form onSubmit={handleSubmit} className="">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-1">
                        Name<span>*</span>
                    </label>
                    <input
                        id="name"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark w-full p-2 rounded-md border-gray-300 border-2 dark:border"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-1">
                        Email<span>*</span>
                    </label>
                    <input
                        id="email"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark w-full p-2 rounded-md border-gray-300 border-2 dark:border"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="phoneNumber" className="block mb-1">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark w-full p-2 rounded-md border-gray-300 border-2 dark:border"
                        type="text"
                        placeholder="Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="block mb-1">
                        Message<span>*</span>
                    </label>
                    <textarea
                        id="message"
                        className="bg-input-background-light dark:bg-input-background-dark text-text-dark w-full p-2 w-full min-h-20 max-h-40 resize-none border-gray-300 rounded-lg border-2 dark:border"
                        value={message}
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button
                    className="bg-button-light dark:bg-button-dark text-text-light w-full flex flex-row justify-center items-center py-2 rounded-lg shadow-lg hover:underline hover:cursor-pointer"
                    type="submit"
                    value="Send"
                >
                    Send <IoMdSend className="ml-2" />
                </button>
            </form>
        </div>
    )
}

export default EmailForm
