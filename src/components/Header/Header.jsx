import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLink = [
  { label: "درگاه ملی مجوز کشور", href: "/national-license-gateway" },
  { label: "راهنما", href: "/guide" },
  { label: "درباره ما", href: "/about" },
  { label: "خانه", href: "/" },
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
            {navLink.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Image
            src="/logo.png"
            className="mb-3 w-36 h-auto"
            width={0}
            height={0}
            sizes="100vw"
            alt="logo"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
