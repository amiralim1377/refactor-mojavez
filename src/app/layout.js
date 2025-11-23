import "./globals.css";
import { vazirmatn } from "./fonts/fonts";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable}`}>
        <Header />
        <main className="container ">{children}</main>
      </body>
    </html>
  );
}
