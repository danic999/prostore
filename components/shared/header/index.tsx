import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex flex-row justify-between">
        <div className="justify-start">
          <Link className="flex flex-row items-center" href="/">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Menu></Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
