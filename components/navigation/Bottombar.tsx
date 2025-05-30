"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/lib/navItems";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-sidebar border-t border-white/10 shadow-md md:hidden">
      <div className="flex justify-between items-center px-4 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 text-xs text-white/70 transition-all",
                isActive && "text-white"
              )}
            >
              <item.icon size={20} className="mb-0.5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomBar;
