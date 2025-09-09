"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { fetchMarsPhotos } from "@/lib/actions";
import { MarsPhoto } from "@/types";
import Filters from "./Filters";
import ImageGallery from "./ImageGallery";
import Pagination from "./Pagination";
import GallerySkeleton from "./GallerySkeleton";

export default function MarsGalleryContainer() {
  const searchParams = useSearchParams();
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [isPending, startTransition] = useTransition();

  const isLastPage = photos.length < 25;

  useEffect(() => {
    const params = {
      rover: searchParams.get("rover") || "curiosity",
      camera: searchParams.get("camera") || undefined,
      earth_date: searchParams.get("earth_date") || undefined,
      page: Number(searchParams.get("page")) || 1,
    };

    startTransition(async () => {
      const result = await fetchMarsPhotos(params);
      setPhotos(result || []);
    });
  }, [searchParams]);

  return (
    <div>
      <Filters />
      {isPending ? (
        <GallerySkeleton />
      ) : (
        <>
          <ImageGallery photos={photos} />
          
          {(photos.length > 0 || Number(searchParams.get("page")) > 1) && (
            <Pagination isLastPage={isLastPage} />
          )}
        </>
      )}
    </div>
  );
}

