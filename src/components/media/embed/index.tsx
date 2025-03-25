import React from 'react';

const YoutubeHero: React.FC<{
  videoId: string;
  title?: string;
  description?: string;
}> = ({ videoId, title, description }) => {
  return (
    <div className="relative w-full h-[50vh] max-h-screen overflow-hidden bg-gradient-to-b from-black/50 via-transparent to-black/80">
      {/* YouTube 背景影片 */}
      <iframe
        className="absolute z-10 top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default YoutubeHero;
