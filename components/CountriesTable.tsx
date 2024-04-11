"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { Country } from "@/db/schema/countries";
import { EditIcon } from "@/components/EditIcon";
import { DeleteIcon } from "@/components/DeleteIcon";

interface CountriesPageProps {
  countries: Country[];
}

export function CountriesTable({ countries }: CountriesPageProps) {
  return (
    <Table
      className="w-fit"
      removeWrapper={true}
      aria-label="Example static collection table"
    >
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {countries.map((country) => (
          <TableRow key={country.id}>
            <TableCell>{country.id}</TableCell>
            <TableCell>{country.name}</TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
