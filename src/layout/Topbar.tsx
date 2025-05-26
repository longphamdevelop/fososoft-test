import Image from 'next/image';
import Link from 'next/link';

function Topbar() {
  return (
    <div
      className="extra:px-60 flex items-center justify-between px-3 py-2 text-white xl:px-5"
      style={{
        backgroundImage: `linear-gradient(
          270deg,
          #0d57c6 0%,
          #37cfff 50.39%,
          #0f5ed6 100%
        )`,
      }}
    >
      <div className="flex items-center gap-2">
        <Image src="/sale.svg" alt="sale" width={16} height={16} />
        <span className="text-xs">
          Nhập mã{' '}
          <span className="text-warning text-sm font-semibold">NEWBIE</span>{' '}
          giảm ngay 10% cho lần đầu mua hàng.
        </span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="tel:02837607607" className="flex items-center gap-2">
          <Image src="/call.svg" alt="call" width={16} height={16} />
          <span className="flex items-center text-xs leading-0">
            Hotline:&ensp;
            <span className="text-warning text-sm leading-0 font-semibold">
              0283 760 7607
            </span>
          </span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/phone.svg" alt="phone" width={16} height={16} />
          <span className="text-xs leading-0">Tải ứng dụng</span>
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
