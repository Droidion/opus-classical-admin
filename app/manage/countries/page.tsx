"use server";

import { getCountries } from "@/db/queries/countries";
import { dbConnect } from "@/db/connect";

export default async function CountriesPage() {
  const db = dbConnect();
  const countries = await getCountries(db);
  return (
    <>
      <div>Countries</div>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}
