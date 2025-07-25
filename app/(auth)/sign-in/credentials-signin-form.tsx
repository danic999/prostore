"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import { Button } from "@/components/ui/button";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <form className="flex flex-col gap-4" action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className=" flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          ></Input>
          <Label htmlFor="email">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          ></Input>
        </div>
        <SignInButton></SignInButton>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
      </div>
      <div className="flex flex-row gap-2  text-sm justify-center text-muted-foreground">
        Don&apos;t have an account?
        <Link href="/sign-up" target="_self" className="link">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
