import emailjs from '@emailjs/nodejs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            to_name: 'Navier',
            message: data.message,
            from_phoneNumber: data.phoneNumber
        }

        console.log('Template Params:', templateParams)
        console.log('Environment Variables:', {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
            privateKey: process.env.EMAILJS_PRIVATE_KEY
        })

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                privateKey: process.env.EMAILJS_PRIVATE_KEY!
            }
        )

        console.log('EmailJS Response:', response)
        return NextResponse.json({
            success: true,
            status: response.status,
            text: response.text
        })
    } catch (err) {
        console.error('Email Sending Failed:', err)
        return NextResponse.json(
            { success: false, error: err },
            { status: 500 }
        )
    }
}
