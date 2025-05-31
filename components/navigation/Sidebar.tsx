"use client";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/react";
import navItems from "@/lib/navItems";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className="group/sidebar relative hidden lg:block"
      data-state={collapsed ? "closed" : "open"}
    >
      <Button
        isIconOnly
        variant="light"
        onPress={() => setCollapsed(!collapsed)}
        className="absolute right-[-12] min-w-0 min-h-0 w-6 h-6 top-12 bg-sidebar"
        radius="full"
      >
        <ChevronRight
          size={14}
          className={cn(
            "transition-transform duration-500 group-data-[state=open]/sidebar:rotate-180"
          )}
        />
      </Button>
      <aside
        className={cn(
          "h-full min-h-screen bg-sidebar transition-all duration-500  flex flex-col ease-in-out overflow-hidden",
          collapsed ? "w-16 p-3" : "w-58 p-4"
        )}
      >
        <div
          className={cn(
            "flex gap-3 mb-8 items-end transition-all duration-400 overflow-visible",
            collapsed && "mx-auto"
          )}
        >
          <Avatar
            src="/profile.jpg"
            name="Tariq Brown"
            className={cn("transition-all", collapsed && "w-10 h-10")}
          />
          <div
            className={cn(
              "flex flex-col transition-all duration-300",
              collapsed
                ? "opacity-0 max-w-0 h-0 overflow-hidden"
                : "opacity-100"
            )}
          >
            <p
              className={cn(
                "transition-opacity duration-300 font-bold leading-none"
              )}
            >
              Tariq Brown
            </p>
            <p
              className={cn(
                "text-[0.8rem] text-white/50 transition-opacity duration-500 whitespace-nowrap",
                collapsed ? "opacity-0" : "opacity-100"
              )}
            >
              Software Engineer
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-sm text-white/65 hover:text-white transition-all duration-400",
                  collapsed ? "justify-center p-2" : "gap-2 px-3 py-2",
                  isActive &&
                    "bg-white/10 outline-white/20 outline-[1px] text-white"
                )}
              >
                <item.icon size={18} className="leading-none" />
                <span
                  className={cn(
                    "transition-all duration-400",
                    !collapsed
                      ? `opacity-100 w-auto delay-[150ms]`
                      : "opacity-0 w-0 overflow-hidden"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
