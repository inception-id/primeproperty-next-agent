"use client";
import { HeaderSheet } from "./sheet";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "../_sidebar";
import { LuPanelLeft } from "react-icons/lu";
import { HeaderBreadcrumb } from "./breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { useAgentBySupertokensId } from "@/hooks";

const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between border-b md:hidden">
      <Link href="/" className="flex items-center gap-2 pl-2">
        <Image
          src="/images/primepro.png"
          alt="PrimePro Logo"
          width={50}
          height={50}
          className="w-6 h-6"
        />
        <div className="text-lg flex flex-wrap font-bold">
          PRIMEPRO INDONESIA
        </div>
      </Link>
      <HeaderSheet />
    </div>
  );
};

const DesktopHeader = () => {
  const { isMinimized, setMinimized } = useSidebarStore();
  const { data } = useAgentBySupertokensId();
  return (
    <div className="hidden md:flex items-center border-b p-1 justify-between">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMinimized(!isMinimized)}
        >
          <LuPanelLeft />
        </Button>
        <div className="bg-foreground/75 w-[1px] h-4" />
        <HeaderBreadcrumb />
      </div>

      <span className="flex flex-col px-3 text-xs text-right">
        <div>{data?.data?.fullname}</div>
        <div className="text-foreground/50">{data?.data?.email}</div>
      </span>
    </div>
  );
};

export const Header = () => {
  return (
    <nav className="">
      <MobileHeader />
      <DesktopHeader />
    </nav>
  );
};
