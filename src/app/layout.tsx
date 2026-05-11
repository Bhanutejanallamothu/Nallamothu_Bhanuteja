
import type {Metadata} from 'next';
import './globals.css';

const siteUrl = 'https://www.nallamothubhanuteja.dev';
const siteTitle = 'Nallamothu Bhanuteja | Full Stack Developer, Cloud Engineer & UI/UX Developer';
const siteDescription = 'Portfolio of Nallamothu Bhanuteja, a full stack developer, cloud engineer, and UI/UX developer in India building high-performance React, Next.js, Node.js, AWS, and modern web applications.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Nallamothu Bhanuteja',
  },
  description: siteDescription,
  keywords: [
    'Nallamothu Bhanuteja',
    'Bhanuteja',
    'Full Stack Developer India',
    'Cloud Engineer India',
    'UI UX Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'AWS Cloud Engineer',
    'Software Engineer Portfolio',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Nallamothu Bhanuteja', url: siteUrl }],
  creator: 'Nallamothu Bhanuteja',
  publisher: 'Nallamothu Bhanuteja',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Nallamothu Bhanuteja Portfolio',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@Bhanuteja',
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
