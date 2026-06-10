import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riamriam.org"),
  title: "RPDN | RIAMRIAM Peace and Development Network",
  description:
    "RPDN is a community-driven peace and development organization advancing social cohesion, resilience, governance, and sustainable livelihoods across the Ateker corridor.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    title: "RPDN | RIAMRIAM Peace and Development Network",
    description:
      "Building peace, empowering communities, and transforming lives across Kenya and East Africa.",
    type: "website",
    images: ["/riamriam-logo.png"]
  }
};

import { LanguageProvider } from "./context/LanguageContext";
import Chatbot from "./riamriam-contact-ops-chat/Chatbot";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
