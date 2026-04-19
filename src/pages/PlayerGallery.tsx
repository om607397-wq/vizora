import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { players } from "../data/mockData";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function PlayerGallery() {
  const { id } = useParams();
  const player = players.find(p => p.id === id);
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  if (!player) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold">اللاعب غير موجود</h2>
        <Link to="/" className="text-vizora-green mt-4 block">العودة للرئيسية</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <Link to="/" className="p-2 border border-vizora-gray rounded-full hover:bg-vizora-dark transition-colors shrink-0">
            <ArrowRight size={20} />
          </Link>
          <div className="flex items-center gap-4">
            <img src={player.avatarUrl} alt={player.name} className="w-16 h-16 rounded-full object-cover border-2 border-vizora-green" />
            <div>
              <h1 className="text-3xl font-black">{player.name}</h1>
              <p className="text-vizora-light-gray">{player.posters.length} بوسترات مصممة</p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative mx-auto">
          {player.posters.map((poster) => (
            <div 
              key={poster.id}
              onClick={() => setSelectedPoster(poster.imageUrl)}
              className="group cursor-pointer rounded-[4px] overflow-hidden aspect-[1059/1488] bg-vizora-black border border-[#333] hover:border-vizora-green relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <img 
                src={poster.imageUrl} 
                alt={poster.title} 
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-vizora-green text-vizora-black px-6 py-2.5 rounded-[4px] font-black text-[14px]">
                  عرض البوستر
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8">
          <button 
            onClick={() => setSelectedPoster(null)}
            className="absolute top-6 right-6 text-white hover:text-vizora-green p-2 z-10"
          >
            <X size={32} />
          </button>
          
          <img 
            src={selectedPoster} 
            alt="Poster" 
            loading="lazy"
            className="max-h-full w-full max-w-[1024px] rounded-xl object-contain shadow-2xl" 
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
