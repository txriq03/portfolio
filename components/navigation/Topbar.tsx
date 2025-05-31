"use client";
import { Avatar } from "@heroui/react";
import Container from "../Container";
import React from "react";

const Topbar = () => {
  return (
    <div className="lg:hidden py-5">
      <Container className="flex gap-2 items-center">
        <Avatar name="Tariq Brown" src="/profile.jpg" />
        <div className="flex flex-col gap-0">
          <p>Tariq Brown</p>
          <p className="text-[0.8rem] text-white/50">Software Engineer</p>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
