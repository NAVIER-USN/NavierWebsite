import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Providers from '@/components/navbar/theme-switch/providers/Providers'
import Footer from '@/components/footer/Footer'
import { GoogleTagManager } from '@next/third-parties/google'
import Navbar from '@/components/navbar/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Navier USN',
    description:
        'Navier USN, a student group at the University of South-Eastern Norway developing autonomous vessels.',
    keywords:
        'NavierUSN, USN, Triton, electric autonomous boat, Kongsberg, Sprout, Kartverket, Link, Celerway, Emcom, Telia, lidar, GPS, Jetson, modem, Xsens, Zed-X, Autodrone Horten, technology, innovation, engineering, competition, careers at Kongsberg, student project, autonomous navigation'
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <Providers>
                    <Navbar />
                    <main className="flex-grow bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
                        {children}
                    </main>
                    {process.env.NEXT_PUBLIC_GOOGLE_TAG_GTM && (
                        <GoogleTagManager
                            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_GTM}
                        />
                    )}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
