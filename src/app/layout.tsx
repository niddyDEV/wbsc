import type { Metadata } from 'next';
import localFont from "next/font/local";
import './globals.css';

const lexendExaRegular = localFont({
  src: "./fonts/LexendExaRegular.woff",
  variable: "--font-lexend-exa",
  weight: "100 900",
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'WISWIR - Business School Club',
  description: 'Elite business school providing real-world experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lexendExaRegular.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

