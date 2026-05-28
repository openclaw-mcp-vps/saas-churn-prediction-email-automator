import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnGuard – Predict Churn & Automate Retention Emails",
  description: "Analyzes usage patterns to predict churn risk and automatically sends targeted retention emails for SaaS founders and customer success teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="03b22b4a-caef-423f-8d2f-dc1e45a4011d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
