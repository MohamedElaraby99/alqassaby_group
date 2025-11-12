import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elkassaby Group',
  description: 'Elkassaby Group for Poultry Feed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

