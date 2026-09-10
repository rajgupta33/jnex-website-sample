import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-10">
          Hear it from a Jnex student.
        </h3>

        {/* on desktop: grid-cols-3 gap-6; 1 large + 2 small */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1 Large Featured Video Thumbnail */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center overflow-hidden group cursor-pointer border border-gray-200/60 shadow-xs hover:shadow-sm transition-all duration-300">
              <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:bg-white transition-all duration-300">
                <Play className="text-primary fill-primary ml-1" size={28} />
              </div>
            </div>

            {/* Below thumbnail: Student Name (font-bold) + 'NEET 2025 • College Name' (text-sm text-gray-500) */}
            <div className="mt-4">
              <p className="font-bold text-primary text-base md:text-lg">
                Student Name
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                NEET 2025 • College Name
              </p>
            </div>
          </div>

          {/* Beside/below: Two small video thumbnails */}
          <div className="flex flex-col gap-6">
            {/* Small Video 1: 'Parent Experience' */}
            <div>
              <div className="rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center overflow-hidden group cursor-pointer border border-gray-200/60 shadow-xs hover:shadow-sm transition-all duration-300">
                <div className="bg-white/90 w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-white transition-all duration-300">
                  <Play className="text-primary fill-primary ml-0.5" size={20} />
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">
                Parent Experience
              </p>
            </div>

            {/* Small Video 2: 'How Jnex Helped During Counselling' */}
            <div>
              <div className="rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center overflow-hidden group cursor-pointer border border-gray-200/60 shadow-xs hover:shadow-sm transition-all duration-300">
                <div className="bg-white/90 w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-white transition-all duration-300">
                  <Play className="text-primary fill-primary ml-0.5" size={20} />
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">
                How Jnex Helped During Counselling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
