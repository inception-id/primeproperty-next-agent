"use client";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FindLeadsQuery } from "@/lib/api/leads/find-leads";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useRef, ChangeEvent } from "react";
import { LuSearch } from "react-icons/lu";

type FilterProps = {
  searchParams: FindLeadsQuery;
};

export const Filter = ({ searchParams }: FilterProps) => {
  const router = useRouter();
  const typingTimeoutRef = useRef<any>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef?.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      let searchValue = e.target.value;
      if (searchValue.startsWith("0")) {
        searchValue = searchValue.replace("0", "");
      }
      router.replace(`/leads?search=${searchValue}`);
    }, 500);
  };
  return (
    <div className="w-full flex items-end justify-between">
      <div className="flex items-center w-full md:w-fit">
        <div
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "border-r-transparent rounded-r-none",
          )}
        >
          <LuSearch />
        </div>
        <Input
          type="text"
          id="agent-search"
          placeholder="Search name or phone"
          className="rounded-l-none border-l-transparent focus-visible:ring-transparent w-full md:w-fit"
          onChange={onChange}
          ref={typingTimeoutRef}
          defaultValue={searchParams?.search}
        />
      </div>
    </div>
  );
};
