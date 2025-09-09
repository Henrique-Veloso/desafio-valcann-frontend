import { MarsPhoto } from "@/types";
import RoverImage from "./RoverImage"; 

interface ImageGalleryProps {
  photos: MarsPhoto[];
}

export default function ImageGallery({ photos }: ImageGalleryProps) {
  const validPhotos = photos.filter(photo => photo && photo.img_src);

  if (validPhotos.length === 0) {
    return <p className="text-center text-gray-500">Nenhuma foto encontrada para os filtros selecionados.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {validPhotos.map((photo) => (
        <div 
          key={photo.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <RoverImage
            src={photo.img_src}
            alt={`Foto de Marte tirada pelo Rover ${photo.rover.name}`}
            width={400}
            height={400}
            className="w-full h-48 object-cover"
            priority={validPhotos.indexOf(photo) < 8}
          />
          <div className="p-3 text-sm text-slate-700">
            <p><strong>Rover:</strong> {photo.rover.name}</p>
            <p><strong>Câmera:</strong> {photo.camera.full_name}</p>
            <p><strong>Data:</strong> {photo.earth_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}