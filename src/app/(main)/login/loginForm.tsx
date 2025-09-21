"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { FormEvent, useEffect, useState } from "react";
import { user } from "@/lib/jotai";
import { useAtom } from "jotai";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm() {
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
    setPending(false);
  };

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    setPending(true);

    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const { username, password } = {
      username: data.get("username")?.toString(),
      password: data.get("password")?.toString(),
    };

    if (!username) return alrt("username");
    if (!password) return alrt("password");

    const res = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify({
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
      <div className="grid gap-2">
        <Label htmlFor="email">Username</Label>
        <Input
          name="username"
          id="username"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Input name="password" id="password" type="password" required />
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        {isPending ? "Loggin..." : "Login"}
      </Button>
    </form>
  );
}
