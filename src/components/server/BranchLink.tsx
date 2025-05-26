import Image from 'next/image';
import Link from 'next/link';

function BranchLink() {
  return (
    <div className="bg-brand-50 flex flex-wrap items-center justify-between gap-5 px-3 py-8 xl:px-60">
      <div className="flex items-center gap-4">
        <Image src="/map.svg" alt="map" width={48} height={48} />
        <span className="text-[28px] font-medium">
          Xem hệ thống 88 cửa hàng trên toàn quốc
        </span>
      </div>
      <Link
        href="#branch"
        className="text-brand-600 flex items-center gap-3 rounded-full bg-white px-6 py-3 transition-all duration-300 hover:pr-5 hover:pl-7"
      >
        <span className="font-semibold">Xem ngay</span>
        <span>&rarr;</span>
      </Link>
    </div>
  );
}

export default BranchLink;
