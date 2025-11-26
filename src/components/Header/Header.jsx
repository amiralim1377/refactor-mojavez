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
    <header className="bg-header-pattern  p-4 flex items-center justify-around ">
      <section className=" flex items-center justify-between container">
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
        <nav className="hidden md:block">
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
        <div className="flex items-center gap-x-1">
          <User stroke="white" fill="white" className="w-5 h-5" />
          <span className="text-white">ورود</span>
        </div>
      </section>
    </header>
  );
}

export default Header;

// function Header() {
//   return (
//     <header className="bg-primary  p-4 flex items-center justify-around ">
//       <section className="flex gap-6 items-center justify-between ">
//         <div>
//           <Image
//             src="/logo.png"
//             className="mb-3 w-36 h-auto"
//             width={0}
//             height={0}
//             sizes="100vw"
//             alt="logo"
//           />
//         </div>
//         <nav>
//           <ul className="flex items-center gap-6">
//             {navLink.map((item, i) => (
//               <li key={i}>
//                 <Link href={item.href} className="text-white transition">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </section>
//       <div className="flex items-center gap-x-1">
//         <User stroke="white" fill="white" className="w-5 h-5" />
//         <span className="text-white">ورود</span>
//       </div>
//     </header>
//   );
// }

// export default Header;
