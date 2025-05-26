'use client';

import { formatNumber } from '@/utils/formatter';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  price?: number;
  discount?: number;
  showPromotion?: boolean;
};

function ProductCard({
  price = 299000,
  discount = 10,
  showPromotion = true,
}: ProductCardProps) {
  return (
    <Link href="/">
      <div className="shadow-card-product min-w-[214px] overflow-hidden rounded-lg !bg-white">
        <div className="flex aspect-square justify-center overflow-hidden">
          <Image
            src="/product03.svg"
            alt="product"
            width={200}
            height={200}
            className="h-full transition-transform duration-700 hover:scale-150"
          />
        </div>
        <div className="flex flex-col gap-4 p-5">
          {showPromotion && (
            <div
              className="flex w-fit items-center gap-[6px] rounded-full px-[10px] py-[2px]"
              style={{
                backgroundImage: `linear-gradient(135deg, #FFD666 0%, #FFAB00 100%)`,
              }}
            >
              <Image src="/fire.svg" alt="fire" width={16} height={16} />
              <span className="text-sm font-semibold text-[#7A0916]">
                Giá cực sốc
              </span>
            </div>
          )}
          <p className="line-clamp-2 font-medium text-pretty text-ellipsis">
            Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer
            (52046262)
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-[#B71D18]">
              {formatNumber(price - price * (discount / 100))}&ensp;đ
            </p>
            {discount && discount > 0 ? (
              <p className="flex items-center gap-[10px]">
                <span className="text-disabled text-sm line-through">
                  {formatNumber(price)}&ensp;đ
                </span>
                <span className="text-xs font-medium text-[#B71D18]">
                  {'-'}
                  {discount}%
                </span>
              </p>
            ) : (
              <></>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="bg-brand-50 text-brand-600 flex h-9 cursor-pointer items-center justify-center rounded-lg border-none text-sm font-semibold outline-none"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
