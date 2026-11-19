import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raglasscare.com"),
  title: "RA Glass Care — Storefront & Commercial Window Cleaning | Astoria, Queens NYC",
  description:
    "Astoria, Queens & NYC's premier storefront and commercial window cleaning. Inside & outside streak-free sparkling glass for local businesses. Call (929) 501-1116.",
  keywords: [
    "window cleaning Astoria",
    "storefront cleaning Queens",
    "commercial window cleaning NYC",
    "RA Glass Care",
    "streak free glass cleaning NYC",
    "storefront glass maintenance Queens",
  ],
  authors: [{ name: "Rudro — RA Glass Care" }],
  openGraph: {
    title: "RA Glass Care — Storefront & Commercial Window Cleaning | Astoria NYC",
    description: "Make Your Business Shine! Professional streak-free inside & outside storefront and commercial window cleaning in Astoria, Queens & NYC.",
    url: "https://raglasscare.com",
    siteName: "RA Glass Care",
    images: [
      {
        url: "/branding/ra-glass-care-badge.jpg",
        width: 800,
        height: 800,
        alt: "RA Glass Care Storefront Window Cleaning NYC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/branding/ra-glass-care-badge-round.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className="bg-[#0B0F17] text-slate-100 antialiased selection:bg-amber-400/20 selection:text-amber-200 min-h-screen flex flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
