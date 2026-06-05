import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/layout/navbar";
import { CookiesProvider } from "next-client-cookies/server";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const poppins: NextFont = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const manrope: NextFont = Manrope({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regen AI - AI-Powered Resume Builder",
  description:
    "Regen AI is an AI-powered resume builder that helps you create a professional and personalized resume in minutes. With our advanced AI technology, you can easily generate a resume that stands out from the competition and highlights your unique skills and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${manrope.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <CookiesProvider>
            <ClerkProvider>
              <Navbar />
              {children}
            </ClerkProvider>
          </CookiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
