"use client";

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";

function Greeting() {
  const { user } = useUser();
  return <div>Hello, {user?.fullName}</div>;
}

function AuthButtons() {
  const router = useRouter();
  return (
    <>
      <Button
        className="mr-4"
        onClick={() => router.push("/sign-up")}
        color="primary"
      >
        Sign Up
      </Button>
      <Button
        className="ml-4"
        onClick={() => router.push("/sign-in")}
        color="primary"
      >
        Sign In
      </Button>
    </>
  );
}

function SingOutButton() {
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <Button
      className="mt-4"
      onClick={() => signOut(() => router.push("/"))}
      color="primary"
    >
      Sign Out
    </Button>
  );
}

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="flex flex-col items-center justify-center py-unit-64">
      <h1 className="text-4xl">Opus Classical Admin</h1>
      <div className="mt-8 text-center">
        {isLoaded && isSignedIn && (
          <>
            <Greeting />
            <SingOutButton />
          </>
        )}
        {isLoaded && !isSignedIn && <AuthButtons />}
        {!isLoaded && <Spinner />}
      </div>
    </div>
  );
}
