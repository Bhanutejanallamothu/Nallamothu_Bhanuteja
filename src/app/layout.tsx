
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bhanuteja | Full-stack Software Engineer',
  description: 'Personal portfolio of Nallamothu Bhanuteja, a Full-stack Software Engineer specializing in React, Next.js, Node.js and UI/UX design.',
  keywords: ['Bhanuteja', 'Full-stack Developer', 'Software Engineer', 'React', 'Next.js', 'UI/UX'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
