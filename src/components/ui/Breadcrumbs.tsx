import Image from 'next/image';
import Link from 'next/link';

function Breadcrumbs() {
  return (
    <div className="text-disabled flex gap-5 py-8">
      <Link href="/">Trang chủ</Link>
      <Image src="right-arrow.svg" alt=">" width={8} height={8} />
      <Link href="/" className="text-brand-700 font-semibold">
        Sản phẩm
      </Link>
    </div>
  );
}

export default Breadcrumbs;
