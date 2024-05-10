import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypto-invest-eight.vercel.app/"),
  title: "Sign Up | CryptoInvestUSA",
  description: "Signup form for crypto invest usa",
  openGraph: {
    images: "/home.png",
    title: "Sign Up | CryptoInvestUSA",
    description: "Signup form for crypto invest usa",
    url: "https://cryptoinvestusa.com",
    type: "website",
  },
};

export default function SignUp() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 place-items-start overflow-hidden">
      <div className="hidden bg-muted lg:block w-full">
        <Image
          src="https://images.unsplash.com/photo-1640340434863-6932029a76ab?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          width="1280"
          height="720"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="flex items-start lg:items-center justify-center py-20 px-5 max-w-3xl lg:mr-auto max-lg:mx-auto w-full max-lg:min-h-screen">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">SignUp</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create a new account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="phone">Username</Label>
                <Input id="username" placeholder="max710" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="number"
                  placeholder="+12929292929"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="******" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="con-password">Confirm Password</Label>
              <Input id="con-password" type="password" placeholder="******" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            {/* <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
