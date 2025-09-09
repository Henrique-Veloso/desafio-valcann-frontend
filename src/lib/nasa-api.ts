// Em /src/lib/nasa-api.ts

import { MarsPhoto } from "@/types";

interface LatestPhotosApiResponse {
  latest_photos: MarsPhoto[];
}

export async function getLatestMarsRoverPhotos(rover: string) {
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    throw new Error("Chave da API da NASA não encontrada no ambiente.");
  }

  const url = new URL(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos`);
  url.searchParams.append("api_key", apiKey);

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Falha na requisição à API (latest_photos): ${res.status} ${res.statusText}`);
    }

    const data: LatestPhotosApiResponse = await res.json();
    return data.latest_photos;

  } catch (error) {
    console.error("Erro ao buscar as últimas fotos:", error);
    return [];
  }
}