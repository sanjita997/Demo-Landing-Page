import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Free AI Marketing Consultation | TechVerse Sanjita",
    description:
      "Book a free AI marketing consultation and receive a customized marketing plan for your business.",
    keywords: ["AI marketing consultation", "digital marketing", "small business marketing", "AI marketing plan"],
    alternates: { canonical: origin },
    openGraph: {
      title: "Get a Free AI Marketing Consultation",
      description: "Receive a customized AI marketing plan built around your business.",
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Free AI Marketing Consultation" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Get a Free AI Marketing Consultation",
      description: "Receive a customized AI marketing plan built around your business.",
      images: [`${origin}/og.png`],
    },
    icons: { icon: "/logo.png", apple: "/logo.png" },
  };
}

const themeScript = `
  try {
    const stored = localStorage.getItem('theme');
    const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
