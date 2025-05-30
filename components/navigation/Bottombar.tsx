"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/lib/navItems";
import { Dock, DockIcon } from "../magicui/dock";
import { Button } from "@heroui/react";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <Dock className="fixed bottom-5 left-1/2 -translate-x-1/2 md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <DockIcon key={item.name}>
            <Link href={item.href}>
              <Button isIconOnly variant="light" data-hover={isActive}>
                <item.icon
                  className={cn(
                    "text-white/70 group-hover:text-white",
                    isActive && "text-white"
                  )}
                />
              </Button>
            </Link>
          </DockIcon>
        );
      })}
    </Dock>
  );
};

export default BottomBar;
