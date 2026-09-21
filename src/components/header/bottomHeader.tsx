import React from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Վարկեր", href: "#" },
  { label: "Քարտեր", href: "#" },
  { label: "Ավանդներ", href: "#" },
  { label: "Հաշիվներ", href: "#" },
  { label: "Փոխանցումներ", href: "#" },
  { label: "Արժեթղթեր", href: "#" },
  { label: "EvocaSALARY", href: "#" },
  { label: "EvocaTOUCH", href: "#" },
];

export const BottomHeader: React.FC = () => {
  return (
    <div className="w-full border-b border-gray-100 bg-white py-3 shadow-sm">
      <div className="mx-auto flex items-center justify-between px-7">
        {/* Ձախ մաս՝ Լոգո */}
        <a href="#" className="mr-8 flex shrink-0 items-center">
          <img
            src="/images/logo.png"
            alt="Evoca Bank Logo"
            className="w-[200px] h-[80px]"
          />
        </a>

        {/* Կենտրոնական նավիգացիա */}
        <nav className="hidden lg:flex flex-1 items-center space-x-5 xl:space-x-8 text-sm font-medium text-black">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-[#6400dc]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-4 mr-4 shrink-0">
          <button className="whitespace-nowrap rounded-full bg-[#6400dc] px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5200b6]">
            EvocaONLINE
          </button>
        </div>
      </div>
    </div>
  );
};