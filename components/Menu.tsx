"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import { Divider } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Menu() {
  return (
    <aside className="flex">
      <div className="mt-4 ml-4 w-40">
        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
          <ListboxItem key="new">Countries</ListboxItem>
          <ListboxItem key="copy">Other Item</ListboxItem>
          <ListboxItem key="edit">Other Item</ListboxItem>
        </Listbox>
        <div className="flex ml-3 mt-4 w-full">
          <div className="mr-4">
            <UserButton />
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <Divider className="mx-6" orientation="vertical" />
    </aside>
  );
}
