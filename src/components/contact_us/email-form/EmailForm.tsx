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
        <div className="bg-foreground-light dark:bg-foreground-dark p-4 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="">
                <input
                    className="mb-5 p-2"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="mb-5 p-2"
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="mb-5 p-2"
                    type="number"
                    placeholder="Your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <textarea
                    className="mb-5 p-2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="bg-background-light dark:bg-background-dark w-full flex flex-row justify-center items-center py-2 rounded-lg shadow-lg hover:underline hover:cursor-pointer"
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
