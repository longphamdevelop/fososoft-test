import Image from 'next/image';
import Carousel from '../client/Carousel';

function Banner() {
  return (
    <div className="bg-brand-600 overflow-hidden rounded-xl">
      <Image
        src="/banner.svg"
        alt="banner"
        height={500}
        width={1440}
        className="h-auto w-full"
      />
      <div className="bg-brand-600 extra:p-12 p-3 xl:p-5">
        <Carousel />
      </div>
    </div>
  );
}

export default Banner;
