"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="flex justify-between p-5">
      <div className="text-xl font-semibold">Opus Classical Admin</div>
      <div className="flex">
        <div className="px-2">
          <ThemeSwitcher />
        </div>
        <div className="px-2">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
