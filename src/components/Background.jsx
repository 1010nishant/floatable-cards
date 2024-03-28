import BgVideo from '../assets/bg-white-vid.webm';

const Background = () => {
  return <div className='relative w-full h-full'>
    <video  className='absolute w-full h-full object-cover' src={BgVideo} autoPlay loop muted  />
  </div>;
};

export default Background;
