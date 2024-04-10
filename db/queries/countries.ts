import { eq } from "drizzle-orm";
import type { DrizzleDb } from "../connect";
import { type Country, type NewCountry, countries } from "../schema/countries";
import { sort } from "fast-sort";

export async function getCountries(db: DrizzleDb): Promise<Country[]> {
  const result = await db
    .select({
      id: countries.id,
      name: countries.name,
    })
    .from(countries);

  return sort(result).asc((c) => c.name);
}

export async function addCountry(
  db: DrizzleDb,
  country: NewCountry,
): Promise<Country[]> {
  return await db.insert(countries).values(country).returning();
}

export async function updateCountry(
  db: DrizzleDb,
  id: number,
  country: Country,
): Promise<void> {
  await db.update(countries).set(country).where(eq(countries.id, id));
}

export async function deleteCountry(db: DrizzleDb, id: number): Promise<void> {
  await db.delete(countries).where(eq(countries.id, id));
}
