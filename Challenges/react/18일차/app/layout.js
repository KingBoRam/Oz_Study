import Layout from "@/components/Layout";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Layout></Layout>
        <main>{children}</main>
      </body>
    </html>
  );
}
