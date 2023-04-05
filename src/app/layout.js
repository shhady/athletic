import './globals.css'

export const metadata = {
  title: 'ATHLETIC',
  description: 'ATHLETIC GYM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Header />
      <body>
    
        {children}
        </body>
    </html>
  )
}
