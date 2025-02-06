import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moksha 2025',
  description: 'Moksha',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
