"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="flex justify-between p-5">
      <div>Opus Classical Admin</div>
      <div className="flex">
        <ThemeSwitcher />
        <UserButton />
      </div>
    </header>
  );
}
