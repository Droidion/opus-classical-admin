"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import { Divider } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export function Menu() {
  return (
    <aside className="flex">
      <div className="mt-4 ml-4 w-40">
        <Listbox aria-label="Actions">
          <ListboxItem key="countries">
            <Link href="/manage/countries">Countries</Link>
          </ListboxItem>
          <ListboxItem key="performers">
            <Link href="/manage/performers">Performers</Link>
          </ListboxItem>
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
