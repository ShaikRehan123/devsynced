"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ total }: { total: number }) => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const changePage = (difference: number) => {
    setPage((page) => page + difference);
    router.push(`/forum?page=${page + difference}`);
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <Button
        onClick={() => changePage(-1)}
        disabled={page === 1}
        size={"icon"}
        variant={"outline"}
        className="rounded-full p-2 cursor-pointer"
      >
        <ArrowLeftIcon size={20} />
      </Button>
      <p className="text-gray-600 font-Roboto dark:text-gray-400">
        Page {page} of {Math.ceil(total / 10)}
      </p>
      <Button
        onClick={() => changePage(1)}
        disabled={page === Math.ceil(total / 10)}
        size={"icon"}
        variant={"outline"}
        className="rounded-full p-2 cursor-pointer"
      >
        <ArrowRightIcon size={20} />
      </Button>
    </div>
  );
};

export default Pagination;
