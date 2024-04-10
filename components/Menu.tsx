"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";

export function Menu() {
  return (
    <div className="w-60 px-2">
      <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
        <ListboxItem key="new">Countries</ListboxItem>
        <ListboxItem key="copy">Other Item</ListboxItem>
        <ListboxItem key="edit">Other Item</ListboxItem>
      </Listbox>
    </div>
  );
}
