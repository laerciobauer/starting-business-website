import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { routes } from "@/lib/routes";
import WhatsAppFloat from "@/components/whatsapp-float";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.startingabusinessinbrazil.com"),
  title: {
    default:
      "Starting a Business in Brazil - Expert Business Consulting Services",
    template: "%s | Starting a Business in Brazil",
  },
  description:
    "Expert consulting services to help you start a business in Brazil. Complete guide for company formation, CNPJ registration, business permits, and legal compliance in Brazil.",
  keywords:
    "start business Brazil, company formation Brazil, CNPJ registration, Brazilian business consulting, business permits Brazil, formalize company Brazil",
  authors: [{ name: "Starting a Business in Brazil" }],
  creator: "Starting a Business in Brazil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: routes.home,
    title:
      "Starting a Business in Brazil - Expert Business Consulting Services",
    description:
      "Expert consulting services to help you start a business in Brazil. Complete guide for company formation, CNPJ registration, business permits, and legal compliance.",
    siteName: "Starting a Business in Brazil",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Starting a Business in Brazil - Expert Business Consulting Services",
    description:
      "Expert consulting services to help you start a business in Brazil. Complete guide for company formation, CNPJ registration, business permits, and legal compliance.",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: routes.home,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
