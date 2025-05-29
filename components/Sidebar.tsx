"use client";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Compass,
  UserRound,
  MessageCircle,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/react";

const navItems = [
  { name: "Explore", icon: Compass, href: "/" },
  { name: "About", icon: UserRound, href: "/about" },
  { name: "Experience", icon: BriefcaseBusiness, href: "/experience" },
  { name: "Contact", icon: MessageCircle, href: "/contact" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <Button
        isIconOnly
        variant="light"
        onPress={() => setCollapsed(!collapsed)}
        className="absolute right-[-12] min-w-0 min-h-0 w-6 h-6 top-12 bg-sidebar"
        radius="full"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </Button>
      <aside
        className={cn(
          "h-screen bg-sidebar transition-all duration-500  flex flex-col ease-in-out overflow-hidden",
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
          <div className={cn("flex flex-col", collapsed && "hidden")}>
            <p>Tariq Brown</p>
            <p className="text-[0.8rem] text-white/50">Software Engineer</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                " px-3 py-2.5 transition-all duration-400  rounded-md flex gap-2 items-center text-white/65 hover:text-white leading-none",
                collapsed && " p-2 my-1 mx-auto",
                pathname === item.href &&
                  "bg-white/10 outline-white/20 outline-[1px] text-white"
              )}
            >
              <item.icon size={18} className="leading-none" />
              {!collapsed && item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
