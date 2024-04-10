"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import { Divider } from "@nextui-org/react";

export function Menu() {
  return (
    <div className="flex w-56 pl-2 mr-12">
      <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
        <ListboxItem key="new">Countries</ListboxItem>
        <ListboxItem key="copy">Other Item</ListboxItem>
        <ListboxItem key="edit">Other Item</ListboxItem>
      </Listbox>
      <Divider orientation="vertical" />
    </div>
  );
}
