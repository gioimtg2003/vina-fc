import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const siteUrl = "https://vinafc.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VINA EDU FC | Open Source Drone Flight Controller Made in Vietnam",
    template: "%s | VINA EDU FC",
  },
  description:
    "Vina Edu FC is Vietnam's open-source drone flight controller powered by ESP32. The ideal drone research platform, educational drone board for universities, maker communities, and robotics engineers. Mạch điều khiển drone mã nguồn mở made in Vietnam.",
  keywords: [
    // English
    "drone flight controller",
    "drone controller board",
    "open source drone controller",
    "ESP32 flight controller",
    "drone research platform",
    "drone development board",
    "Vietnam drone technology",
    "educational drone platform",
    "ESP32 drone controller",
    "open source drone flight controller",
    "drone controller Vietnam",
    "UAV flight controller",
    "Arduino drone controller",
    "quadcopter flight controller",
    // Vietnamese
    "mạch điều khiển drone",
    "flight controller drone",
    "drone ESP32",
    "drone mã nguồn mở",
    "nền tảng drone nghiên cứu",
    "bộ điều khiển bay",
    "drone Việt Nam",
  ],
  authors: [{ name: "Vina Edu FC Team", url: siteUrl }],
  creator: "Vina Edu FC",
  publisher: "Vina Edu FC",
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
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/en`,
      "vi-VN": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VINA EDU FC",
    title: "VINA EDU FC | Open Source Drone Flight Controller Made in Vietnam",
    description:
      "Vietnam's open-source ESP32 drone flight controller for education, research, and maker communities. The ultimate drone development board for universities and robotics labs.",
    locale: "vi_VN",
    alternateLocale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "VINA EDU FC - Open Source Drone Flight Controller Made in Vietnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vinafc",
    creator: "@vinafc",
    title: "VINA EDU FC | Open Source Drone Flight Controller",
    description:
      "Vietnam's open-source ESP32 drone flight controller for students, engineers, and maker communities.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  category: "Technology",
  classification: "Drone Technology / Educational Hardware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="geo.region" content="VN" />
        <meta name="geo.country" content="Vietnam" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased text-slate-50 bg-slate-900 selection:bg-cyan-500/30 selection:text-cyan-50`}
      >
        {children}
      </body>
    </html>
  );
}
