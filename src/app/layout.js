import "./globals.css";
import { vazirmatn } from "./fonts/fonts";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body dir="" className={`${vazirmatn.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
