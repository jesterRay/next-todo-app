import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@components/ui/Navbar";
import ApolloWrapper from "@components/wrapper/ApolloWrapper";

export const metadata: Metadata = {
  title: "Todo Hive",
  description: "A Todo Hive For Project Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className=" min-h-screen">
        <ApolloWrapper>
          <Navbar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
