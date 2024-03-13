import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Providers from '@/components/navbar/theme-switch/providers/Providers'
import Navbar from '@/components/navbar/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Navier',
    description: 'Welcome'
}

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} grid grid-rows-layout min-h-screen`}
            >
                <Providers>
                    <Navbar />
                    <main className="bg-background-light  dark:bg-background-dark text-text-dark dark:text-text-light">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
