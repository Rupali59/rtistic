import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RTistic - Premium Paper Craft Gifting Agency | Handmade Creations",
  description:
    "RTistic is a premium paper craft gifting agency specializing in handmade creations. We craft beautiful, personalized paper gifts for all occasions. Based in India, serving clients worldwide.",
  keywords:
    "paper craft, handmade gifts, personalized gifts, Indian crafts, wedding gifts, corporate gifts, paper art, custom designs",
  authors: [{ name: "RTistic" }],
  creator: "RTistic",
  publisher: "RTistic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rtistic.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RTistic - Premium Paper Craft Gifting Agency",
    description:
      "Discover beautiful handmade paper crafts and personalized gifts crafted with love. Premium quality creations for every occasion.",
    url: "https://rtistic.vercel.app",
    siteName: "RTistic",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "RTistic - Paper Craft Gifting Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTistic - Premium Paper Craft Gifting Agency",
    description:
      "Discover beautiful handmade paper crafts and personalized gifts crafted with love.",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
        <meta name="theme-color" content="#2C0F24" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
