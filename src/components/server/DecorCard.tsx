import Image from 'next/image';

type Props = {
  img: string;
  title: string;
  description: string;
};

function DecorCard({ img, title, description }: Props) {
  return (
    <div className="shadow-card-deco flex gap-4 rounded-xl bg-white p-4 transition-all duration-300 hover:-translate-y-2">
      <Image src={img} alt="icon" width={48} height={48} />
      <div className="flex flex-col gap-2">
        <p className="font-bold">{title}</p>
        <p className="text-secondary text-sm font-medium">{description}</p>
      </div>
    </div>
  );
}

export default DecorCard;
