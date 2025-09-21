"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";

import { FormEvent, useState } from "react";
import { user } from "@/lib/jotai";
import { useAtom } from "jotai";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [userData, setUserData] = useAtom(user);
  const [isPending, setPending] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (userData.lgogedIn) router.push("/dashboard");
  }, [userData]);

  function OnSuccess(newData: any) {
    setUserData({ data: newData.post, lgogedIn: newData.user });
    router.push("/dashboard");
  }

  function OnError(errData: any) {
    toast("Error Occured", {
      description: String(errData),
    });
  }

  const alrt = (field: string) => {
    toast(`Something wrong with ${field}`, {
      description: `Something wrong with ${field}`,
    });
  };

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    setPending(true);

    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const { email, fname, lname, phone, username, password } = {
      email: data.get("email")?.toString(),
      fname: data.get("fname")?.toString(),
      lname: data.get("lname")?.toString(),
      phone: data.get("phone")?.toString(),
      username: data.get("username")?.toString(),
      password:
        data.get("password") === data.get("con-password")
          ? data.get("password")?.toString()
          : null,
    };

    if (!email) return alrt("email");
    if (!fname) return alrt("fname");
    if (!lname) return alrt("lname");
    if (!phone) return alrt("phone");
    if (!username) return alrt("username");
    if (!password) return alrt("password");

    const res = await fetch(`/api/createUser`, {
      method: "POST",
      body: JSON.stringify({
        email,
        fname,
        lname,
        phone,
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await res.json();

    setPending(false);

    if (resData.user) return OnSuccess(resData);
    return OnError(String(resData));
  };

  return (
    <form onSubmit={handleForm} className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First name</Label>
          <Input name="fname" id="first-name" placeholder="Max" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input name="lname" id="last-name" placeholder="Robinson" required />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="phone">Username</Label>
          <Input id="username" name="username" placeholder="max710" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            maxLength={10}
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
          name="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="******"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="con-password">Confirm Password</Label>
        <Input
          id="con-password"
          name="con-password"
          type="password"
          placeholder="******"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Creating..." : "Create an account"}
      </Button>
      {/* <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button> */}
    </form>
  );
}
