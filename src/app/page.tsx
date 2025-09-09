import MarsGalleryContainer from "@/components/MarsGalleryContainer";

export default function HomePage() {
  return (
    <section className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Galeria de Fotos de Marte</h1>
        <p className="text-lg text-gray-600">Explore as últimas imagens enviadas pelos rovers da NASA.</p>
      </div>
      <MarsGalleryContainer />
    </section>
  );
}