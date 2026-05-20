import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlightIQ — Turn Pilot Logbooks into Business Intelligence",
  description:
    "Analytics platform that transforms pilot flight data into operational insights for airlines and flight schools."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="8c680204-cba6-4a73-8239-042cc853930d"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
