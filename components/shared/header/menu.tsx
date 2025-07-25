import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserIcon, ShoppingCart, EllipsisVertical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle></ModeToggle>
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className=" md:hidden p-4 ">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical></EllipsisVertical>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
            <ModeToggle></ModeToggle>
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon /> Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
