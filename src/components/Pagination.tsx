"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  isLastPage: boolean;
}

export default function Pagination({ isLastPage }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex justify-center items-center gap-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:bg-gray-400"
      >
        Anterior
      </button>
      <span className="font-medium">Página {currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
        className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:bg-gray-400"
      >
        Próximo
      </button>
    </div>
  );
}