import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLink = [
  { label: "خانه", href: "/" },
  { label: "درباره ما", href: "/about" },
  { label: "راهنما", href: "/guide" },
  { label: "درگاه ملی مجوز کشور", href: "/national-license-gateway" },
];

function Header() {
  return (
    <header className="bg-primary p-4 flex items-center justify-around ">
      <div className="flex items-center gap-x-1">
        <User stroke="white" fill="white" className="w-5 h-5" />
        <span className="text-white">ورود</span>
      </div>

      <section className="flex gap-6 items-center justify-between ">
        <nav>
          <ul className="flex items-center gap-6">
            {navLink.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Image
            src={"/logo.png"}
            className="mb-3"
            width={150}
            height={160}
            alt="logo"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
