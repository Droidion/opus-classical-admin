import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Opus Classical Admn",
  description: "Opus Classical admin panel",
};

const clerkOptions = {
  variables: { colorPrimary: "#000000" },
  elements: {
    formButtonPrimary:
      "bg-black border border-black border-solid hover:bg-white hover:text-black",
    socialButtonsBlockButton:
      "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
    socialButtonsBlockButtonText: "font-semibold",
    formButtonReset:
      "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
    membersPageInviteButton:
      "bg-black border border-black border-solid hover:bg-white hover:text-black",
    card: "bg-[#fafafa]",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ClerkProvider appearance={clerkOptions}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
