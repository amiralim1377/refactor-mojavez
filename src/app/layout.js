import "./globals.css";
import { vazirmatn } from "./fonts/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.variable}`}>{children}</body>
    </html>
  );
}
