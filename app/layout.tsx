import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import AosProvider from "@/providers/AosProvider";
import {ToastProvider} from "@heroui/toast";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>

      <AosProvider>
          <ToastProvider placement="top-center" />
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-full  flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://iamsekorme.tech"
                title="Visit iamsekorme.tech homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-indigo-600">iamsekorme.tech</p>
              </Link>
            </footer>
          </div>
      </AosProvider>
        </Providers>
      </body>
    </html>
  );
}
