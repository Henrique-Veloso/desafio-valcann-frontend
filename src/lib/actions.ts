"use server";

import { MarsPhoto } from "@/types";

interface PhotosApiResponse {
  photos: MarsPhoto[];
}
interface LatestPhotosApiResponse {
  latest_photos: MarsPhoto[];
}

interface RoverManifest {
  photo_manifest: {
    name: string;
    photos: {
      sol: number;
      cameras: string[];
    }[];
  };
}

export async function fetchRoverManifest(rover: string) {
  const apiKey = process.env.NASA_API_KEY;
  if (!apiKey) throw new Error("Chave da API da NASA não encontrada.");

  const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${apiKey}`;
  
  try {
    const res = await fetch(url, { cache: 'force-cache' }); // O manifesto não muda, então podemos fazer cache
    if (!res.ok) return null;
    const data: RoverManifest = await res.json();

    // Extraímos e retornamos uma lista única de câmeras
    const allCameras = data.photo_manifest.photos.flatMap(p => p.cameras);
    return [...new Set(allCameras)]; // Retorna apenas os nomes únicos

  } catch (error) {
    console.error("Erro ao buscar manifesto do rover:", error);
    return null;
  }
}

export async function fetchMarsPhotos(params: { rover: string; camera?: string; earth_date?: string; page?: number }) {
  const apiKey = process.env.NASA_API_KEY;
  if (!apiKey) throw new Error("Chave da API da NASA não encontrada.");

  let apiUrl: string;
  const searchParams = new URLSearchParams({ 
    api_key: apiKey,
    page: String(params.page || 1),
  });

  if (params.earth_date) {
    apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${params.rover}/photos`;
    searchParams.append("earth_date", params.earth_date);
    
    if (params.camera && params.camera !== "") {
      searchParams.append("camera", params.camera);
    }
  } else {
    apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${params.rover}/latest_photos`;
  }

  const fullUrl = `${apiUrl}?${searchParams.toString()}`;

  try {
    const res = await fetch(fullUrl, { cache: 'no-store' });
    if (!res.ok) return null;

    if (params.earth_date) {
      const data: PhotosApiResponse = await res.json();
      return data.photos;
    } else {
      const data: LatestPhotosApiResponse = await res.json();
      return data.latest_photos;
    }
  } catch (error) {
    console.error("Erro na Server Action ao buscar fotos:", error);
    return null;
  }
}