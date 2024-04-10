"use server";

import { getCountries } from "@/db/queries/countries";
import { dbConnect } from "@/db/connect";
import { CountriesTable } from "@/components/CountriesTable";
import { Divider } from "@nextui-org/react";

export default async function CountriesPage() {
  const db = dbConnect();
  const countries = await getCountries(db);
  return (
    <>
      <div className="font-semibold text-lg my-4">Countries</div>
      <Divider />
      <CountriesTable countries={countries} />
    </>
  );
}
