"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [isPending, setPending] = useState(false);
  const router = useRouter();

  function OnError(errData: any) {
    toast("Contact Form Sumbittion", {
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
    const { email, phone, name, message } = {
      email: data.get("email")?.toString(),
      name: data.get("name")?.toString(),
      phone: data.get("phone")?.toString(),
      message: data.get("message")?.toString(),
    };

    if (!email) return alrt("email");
    if (!phone) return alrt("phone");
    if (!name) return alrt("name");
    if (!message) return alrt("message");

    const res = await fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify({
        email,
        phone,
        name,
        message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await res.json();

    setPending(false);

    e.currentTarget.reset();
    return OnError(String(resData));
  };

  return (
    <form onSubmit={handleForm} className="grid gap-4 max-w-xl w-full mx-auto">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input name="name" id="name" placeholder="Max" required />
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
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="A question would make sense"
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
