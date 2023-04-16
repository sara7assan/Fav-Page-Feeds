import './style.css'

export const metadata = {
  title: 'FAV PAGE',
  description: 'FAV PAGE FEEDS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
