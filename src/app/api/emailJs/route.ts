import emailjs from '@emailjs/nodejs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const data = await request.json()

    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: 'Navier',
        message: data.message,
        from_phoneNumber: data.phoneNumber
    }

    emailjs
        .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                privateKey: process.env.EMAILJS_PRIVATE_KEY!
            }
        )
        .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text)
            },
            (err) => {
                console.log('FAILED...', err)
            }
        )

    return NextResponse.json({ success: true })
}
