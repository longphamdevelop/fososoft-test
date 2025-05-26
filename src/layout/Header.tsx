import Link from 'next/link';
import Image from 'next/image';
import Searchbox from '@/components/client/Searchbox';
import Category from '@/components/client/Category';
import ProductCard from '@/components/client/ProductCard';

function Header() {
  return (
    <div className="extra:px-60 flex flex-col gap-3 bg-white px-3 py-4 xl:px-5">
      <div className="flex flex-wrap items-center justify-between gap-5 xl:gap-12">
        <Link href="/" className="order-1 w-fit">
          <Image
            src="/logo.svg"
            alt="logo"
            width={250}
            height={111}
            className="extra:h-[111px] h-14 w-auto xl:h-20"
          />
        </Link>
        <Searchbox />
        <div className="order-2 flex items-center gap-12 lg:order-3">
          <div className="flex cursor-pointer items-center gap-2">
            <Image
              src="/vietnam-circle.svg"
              alt="vietnam-circle"
              width={35}
              height={35}
            />
            <span className="font-medium">VI</span>
          </div>
          <div className="group/cart relative flex cursor-pointer items-center gap-2">
            <div className="relative">
              <Image src="/cart.svg" alt="cart" width={35} height={35} />
              <span className="absolute -top-4 -right-2 flex aspect-square w-6 items-center justify-center overflow-hidden rounded-full bg-[#FF5630] text-xs font-medium text-white">
                12
              </span>
            </div>
            <span className="font-medium">Giỏ hàng</span>
            <div
              className="absolute top-full right-0 hidden w-[300px] translate-y-3 rounded-lg bg-white group-hover/cart:block before:absolute before:right-0 before:bottom-full before:h-5 before:w-1/3 before:bg-transparent"
              style={{ boxShadow: '0px 8px 16px 0px #0375F329' }}
            >
              <ProductCard />
            </div>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image
              src="/user-circle.svg"
              alt="user-circle"
              width={35}
              height={35}
            />
            <span className="font-medium">Tài khoản</span>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-6">
          <Category />
          <div className="flex gap-5">
            {['Về chúng tôi', 'Bài viết', 'Catalog', 'Liên hệ'].map(
              (label, index) => (
                <Link
                  key={index}
                  href="/"
                  className="hover:after:bg-primary font-medium after:mx-auto after:block after:h-[2.2px] after:w-0 after:bg-transparent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className="flex items-center gap-5">
          {[
            {
              label: 'Hỗ trợ 24/7',
              img: '/clock.svg',
              imgSize: 20,
            },
            {
              label: 'Miễn phí vận chuyển',
              img: '/hand-money.svg',
              imgSize: 24,
            },
            {
              label: 'Giao hàng nhanh 2h',
              img: '/truck-fill.svg',
              imgSize: 24,
            },
            {
              label: '30 ngày đổi trả',
              img: 'refresh-circle.svg',
              imgSize: 24,
            },
          ].map(({ label, img, imgSize }, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image src={img} alt="icon" width={imgSize} height={imgSize} />
              <span className="font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
