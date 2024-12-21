import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { NextUIProvider } from '@nextui-org/react'
import ToastProvider from '@/component/ToastProvider/ToastProvider'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        

        <body>
          <ToastProvider/>
          <main>{children}</main>
        </body>

      </html>
    </ClerkProvider>
  )
}