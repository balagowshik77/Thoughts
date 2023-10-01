import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";
import {dark} from "@clerk/themes"
const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center cursor-pointer gap-4">
        <Image src="/assets/logo.svg" alt="logo" height={28} width={28} />
        <p className="text-heading3-bold text-light-2 max-xs-hidden">Threads</p>
      </Link>
      <div className="flex items-center gap-2">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher appearance={{
            baseTheme:dark,
            elements:{
                organizationSwitcherTrigger:"px-4 py-2"
            }
        }}/>
      </div>
    </nav>
  );
};

export default Topbar;
