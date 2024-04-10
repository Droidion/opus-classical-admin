"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Country } from "@/db/schema/countries";

interface CountriesPageProps {
  countries: Country[];
}

export function CountriesTable({ countries }: CountriesPageProps) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Id</TableColumn>
        <TableColumn>Name</TableColumn>
      </TableHeader>
      <TableBody>
        {countries.map((country) => (
          <TableRow key={country.id}>
            <TableCell>{country.id}</TableCell>
            <TableCell>{country.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
