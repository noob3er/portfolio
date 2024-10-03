import type { Metadata } from "next";
import "./_assets/styles/globals.css";
import StyledComponentsRegistry from "./_lib/registry";

export const metadata: Metadata = {
  title: "HOOYU",
  description: "My Own Portfolio Made With Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
