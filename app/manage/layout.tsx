import { Menu } from "@/components/Menu";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Header } from "@/components/Header";

export default function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="flex flex-grow max-h-screen">
      <Menu />
      <main className="overflow-auto w-full pt-5 pr-6">{children}</main>
    </div>
  );
}
