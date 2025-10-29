import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Image Converter | JPG to PDF, PDF to JPG, WEBP Converter",
    template: "%s | Image Converter",
  },
  description:
    "Bepul onlayn vosita: JPG-ni PDF-ga, PDF-ni JPG-ga, WEBP-ni JPG yoki PNG formatiga oson va xavfsiz o‘tkazing. Fayllaringiz hech qayerga yuborilmaydi — hammasi brauzeringizda ishlaydi.",
  keywords: [
    "JPG to PDF",
    "PDF to JPG",
    "WEBP to JPG",
    "Image Converter",
    "Online Converter",
    "Free PDF Converter",
  ],
  openGraph: {
    title: "Image Converter — JPG, PDF, WEBP o‘zgartirish vositasi",
    description:
      "Tez, xavfsiz va bepul rasm formatlarini o‘zgartirish vositasi. Hech qanday ro‘yxatdan o‘tishsiz JPG ⇄ PDF ⇄ WEBP konvertatsiya qiling.",
    url: "https://www.imageconverter.uz",
    siteName: "Image Converter",
    images: [
      {
        url: "/og-image.jpg", // agar sizda logotip yoki preview rasmi bo‘lsa
        width: 1200,
        height: 630,
        alt: "Image Converter preview",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Converter | JPG ⇄ PDF ⇄ WEBP",
    description:
      "Barcha rasm formatlarini bir joyda o‘zgartiring — hech qanday yuklashsiz, tez va xavfsiz.",
    images: ["/og-image.jpg"],
    creator: "@anivibe_uz", // siz xohlasangiz bu yerga o‘zingizning Twitter yoki Instagram ni yozamiz
  },
  authors: [{ name: "Anivibe.uz", url: "https://www.anivibe.uz" }],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.imageconverter.uz"),
  alternates: {
    canonical: "https://www.imageconverter.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        <meta
          name="google-site-verification"
          content="__YOUR_GOOGLE_VERIFICATION_CODE__"
        />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-white`}
      >
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
