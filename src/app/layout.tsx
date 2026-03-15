
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bhanuteja | Full Stack Developer & Cloud Engineer',
  description: 'Personal portfolio of Nallamothu Bhanuteja, a Full Stack Developer, Cloud Engineer, and UI Developer specializing in high-performance web applications.',
  keywords: ['Bhanuteja', 'Full Stack Developer', 'Cloud Engineer', 'UI Developer', 'Software Engineer', 'React', 'Next.js', 'Node.js', 'AWS'],
  openGraph: {
    title: 'Bhanuteja | Full Stack Developer & Cloud Engineer',
    description: 'Personal portfolio of Nallamothu Bhanuteja, a Full Stack Developer, Cloud Engineer, and UI Developer.',
    url: 'https://www.nallamothubhanuteja.dev/',
    siteName: 'Bhanuteja Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhanuteja | Full Stack Developer & Cloud Engineer',
    description: 'Personal portfolio of Nallamothu Bhanuteja, a Full Stack Developer, Cloud Engineer, and UI Developer.',
  },
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
