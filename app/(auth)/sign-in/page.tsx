import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import CredentialsSignInForm from "./credentials-signin-form";
export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async ({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) => {
  const session = await auth();

  if (session) {
    return redirect(searchParams.callbackUrl || "/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-gray-300">
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image src="/images/logo.svg" alt="Logo" height={100} width={100} />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
