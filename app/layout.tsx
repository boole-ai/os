import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Imagine OS - On-Device AI Intelligence Layer for OEMs | Boole AI",
    template: "%s | Imagine OS"
  },
  description: "Licensed intelligence layer for device manufacturers. Generate custom apps on-demand, run entirely on-device with zero network access. Privacy-first AI for Android, Windows, and embedded systems.",
  keywords: [
    "local models",
    "on the edge",
    "edge computing",
    "edge AI",
    "local AI models",
    "on-device AI",
    "on-device inference",
    "local inference",
    "edge inference",
    "private AI",
    "offline AI",
    "OEM AI platform",
    "device intelligence",
    "local AI inference",
    "privacy-first AI",
    "embedded AI",
    "AI for manufacturers",
    "on-device machine learning",
    "NPU optimization",
    "edge ML",
    "local machine learning",
    "Android AI layer",
    "Windows AI integration",
    "app generation AI",
    "zero-network AI",
    "offline machine learning",
    "edge models",
    "local LLM",
    "on-device LLM",
    "Boole AI"
  ],
  authors: [{ name: "Boole AI", url: "https://boole.ai" }],
  creator: "Boole AI",
  publisher: "Boole AI",
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
    type: 'website',
    locale: 'en_US',
    siteName: 'Imagine OS',
    title: 'Imagine OS - On-Device AI Intelligence Layer for OEMs',
    description: 'Licensed intelligence layer for device manufacturers. Generate custom apps on-demand, run entirely on-device with zero network access.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imagine OS - On-Device AI Intelligence Layer for OEMs',
    description: 'Generate custom apps on-demand. Zero network access. Privacy-first by construction.',
    creator: '@booleai',
  },
  category: 'technology',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
