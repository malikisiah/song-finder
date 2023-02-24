type vidPlayerProps = {
  vidID: string;
};

export default function VideoPlayer(props: vidPlayerProps) {
  return (
    <div className='flex justify-center '>
      <iframe
        width='560'
        height='350'
        src={`https://www.youtube.com/embed/${props.vidID}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}
