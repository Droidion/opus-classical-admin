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
    <div id="app" className="flex flex-col h-screen w-screen">
      <Header />
      <div id="main" className="flex flex-grow">
        <Menu />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
