import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  metadataBase: new URL("https://raglasscare.com"),
  title: "RA Glass Care | Storefront & Commercial Window Cleaning in Astoria, Queens, NYC",
  description:
    "Professional storefront and commercial window cleaning in Astoria, Queens, New York City (NYC). Inside & outside streak-free cleaning, pure squeegee finish, and simple panel-based pricing. Founded by Rudro.",
  keywords: [
    "window cleaning Astoria",
    "storefront window cleaning Queens",
    "commercial window cleaner NYC",
    "RA Glass Care",
    "Rudro window cleaner",
    "retail glass cleaning NYC",
    "streak-free window cleaning Astoria",
  ],
  authors: [{ name: "Rudro - RA Glass Care" }],
  creator: "RA Glass Care",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/branding/ra-glass-care-badge-round.png", type: "image/png" },
    ],
    apple: [
      { url: "/branding/ra-glass-care-badge-round.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "RA Glass Care | Storefront & Commercial Window Cleaning in Astoria, Queens, NYC",
    description:
      "Make your business shine! Professional inside & outside storefront window cleaning with a streak-free, spotless finish. Astoria & Queens local specialist.",
    url: "https://raglasscare.com",
    siteName: "RA Glass Care",
    images: [
      {
        url: "/branding/ra-glass-care-stationery.jpg",
        width: 1200,
        height: 630,
        alt: "RA Glass Care - Storefront Window Cleaning NYC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0B0F17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="bg-[#0B0F17] text-slate-100 antialiased selection:bg-amber-400/20 selection:text-amber-300 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
