import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const params = useSearchParams();
  const searchParams = params.get("search");
  const router = useRouter();
  if (totalPages === 1) return <></>;
  return (
    <div className="flex items-center justify-between px-3">
      <Button
        size="icon"
        variant="outline"
        disabled={currentPage === 1}
        className="rounded-full"
        onClick={() =>
          router.replace(
            `/leads?page=${+currentPage - 1}&${searchParams && `search=${searchParams}`}`,
          )
        }
      >
        <LuChevronLeft />
      </Button>
      <span className="text-sm">
        {currentPage} of {totalPages}
      </span>
      <Button
        size="icon"
        variant="outline"
        className="rounded-full"
        disabled={currentPage === totalPages}
        onClick={() =>
          router.replace(
            `/leads?page=${+currentPage + 1}&${searchParams && `search=${searchParams}`}`,
          )
        }
      >
        <LuChevronRight />
      </Button>
    </div>
  );
};
