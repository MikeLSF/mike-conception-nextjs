import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'

// Importer la police Open Sans comme demandé
const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mike Conception - L\'expertise IT sur mesure',
  description: 'IA, Branding, Réseaux & Innovation. AI & IT Solutions for a Smarter Business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={openSans.variable}>
      <body className="font-open-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}