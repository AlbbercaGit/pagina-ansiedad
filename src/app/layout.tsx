// import { Poppins } from 'next/font/google'
import './globals.css'
import { Roboto } from 'next/font/google'

const poppins = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Ansiedad Caramelizada',
  description: 'Sitio oficial de Ansiedad Caramelizada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

