const YoutubeEmbed: React.FC = () => {

  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/mRma6NkHwWU?si=axHmQjB6l8x1FUNV&autoplay=1"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeEmbed