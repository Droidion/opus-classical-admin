"use server";

import { getCountries } from "@/db/queries/countries";
import { dbConnect } from "@/db/connect";
import { CountriesTable } from "@/components/CountriesTable";

export default async function CountriesPage() {
  const db = dbConnect();
  const countries = await getCountries(db);
  return (
    <>
      <div className="font-semibold text-lg mb-4">Countries</div>
      <div>
        <CountriesTable countries={countries} />
      </div>
    </>
  );
}
