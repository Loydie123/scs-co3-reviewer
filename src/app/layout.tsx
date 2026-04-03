import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scs-co3-reviewer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AWS SCS-C03 Reviewer & Quiz App | Security Specialty Certification",
    template: "%s | AWS SCS-C03 Reviewer",
  },
  description: "Master the AWS Certified Security - Specialty (SCS-C03) exam with 120+ practice questions, study materials, and full mock exam. Covers all 6 domains: Detection, IAM, Data Protection, Infrastructure Security, Incident Response, and Governance.",
  keywords: [
    "AWS SCS-C03",
    "AWS Security Specialty",
    "AWS Certification",
    "AWS Security",
    "AWS Exam Prep",
    "AWS Practice Test",
    "AWS Study Guide",
    "Cloud Security",
    "AWS IAM",
    "AWS GuardDuty",
    "AWS KMS",
  ],
  authors: [{ name: "SCS-C03 Reviewer" }],
  creator: "SCS-C03 Reviewer",
  openGraph: {
    title: "AWS SCS-C03 Reviewer & Quiz App",
    description: "Master the AWS Security Specialty certification with 120+ practice questions and comprehensive study materials covering all 6 exam domains",
    url: siteUrl,
    siteName: "AWS SCS-C03 Reviewer",
    images: [
      {
        url: "/images/seo.png",
        width: 1200,
        height: 630,
        alt: "AWS SCS-C03 Reviewer & Quiz App - Security Specialty Certification Study Tool",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS SCS-C03 Reviewer & Quiz App",
    description: "Master the AWS Security Specialty certification with 120+ practice questions and comprehensive study materials",
    images: ["/images/seo.png"],
    creator: "@awscertified",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
