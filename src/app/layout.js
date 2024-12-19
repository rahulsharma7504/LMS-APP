import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            defer
          ></script>

        </head>
        <body>
          <header>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}