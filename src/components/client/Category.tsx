'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'motion/react';
import ProductCard from './ProductCard';

function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('bo-loc-dau');

  return (
    <motion.div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button className="flex cursor-pointer items-center justify-between gap-2 rounded-lg bg-[#0155C6] px-4 py-3">
        <Image src="/menu.svg" alt="menu" width={17.04} height={10.91} />
        <span className="font-bold text-white">Danh mục sản phẩm</span>
        <motion.div
          transition={{ duration: 0.3 }}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
        >
          <Image
            src="/chevron-down.svg"
            alt="chevron-down"
            width={17.04}
            height={10.91}
          />
        </motion.div>
      </motion.button>

      <motion.div
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="shadow-primary absolute z-10 flex overflow-hidden rounded-lg bg-[#F4F6F8] shadow-md"
        variants={{
          hidden: {
            y: 20,
            opacity: 0,
            height: 0,
            transition: { duration: 0.3 },
          },
          visible: {
            y: 0,
            opacity: 1,
            height: 'fit-content',
            transition: { duration: 0.3 },
          },
        }}
      >
        <div className="flex min-w-[260px] flex-col">
          {[
            {
              key: 'bo-loc-dau',
              label: 'Bộ Lọc Dầu',
              img: '/product03.svg',
            },
            {
              key: 'bo-loc-khong-khi-1',
              label: 'Bộ Lọc Không Khí',
              img: '/product03.svg',
            },
            {
              key: 'bo-loc-nhien-lieu-1',
              label: 'Bộ Lọc Nhiên Liệu',
              img: '/product03.svg',
            },
            {
              key: 'bo-loc-trong-cabin-1',
              label: 'Bộ Lọc Trong Cabin',
              img: '/product03.svg',
            },
            {
              key: 'bo-loc-khong-khi-2',
              label: 'Bộ Lọc Không Khí',
              img: '/product03.svg',
            },
            {
              key: 'bo-loc-trong-cabin-2',
              label: 'Bộ Lọc Trong Cabin',
              img: '/product03.svg',
            },
            {
              key: 'bo-loc-nhien-lieu-2',
              label: 'Bộ Lọc Nhiên Liệu',
              img: '/product03.svg',
            },
            {
              key: 'bo-loc-khong-khi-3',
              label: 'Bộ Lọc Không Khí',
              img: '/product03.svg',
            },
          ].map(({ key, label, img }, index) => (
            <div
              key={index}
              onMouseOver={() => setSelected(key)}
              className={`flex cursor-pointer items-center border-l-[3px] p-4 transition-all duration-300 ${key === selected ? 'border-l-[#0D57C6] bg-transparent' : 'border-l-transparent bg-white'}`}
            >
              <Image src={img} alt="img" width={40} height={40} />
              <span
                className={
                  key === selected
                    ? 'text-brand-700 font-semibold'
                    : 'font-medium'
                }
              >
                {label}
              </span>
            </div>
          ))}
          <div className="w-full flex-1 bg-white"></div>
        </div>
        <div className="flex flex-col gap-6 p-6">
          <div className="grid grid-cols-3 gap-4 border-b border-b-[#919EAB3D] pb-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center gap-4 rounded-xl bg-white px-4 py-3 shadow-slate-300 transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src="/bo-loc-gio.svg"
                  alt="bo-loc-gio"
                  width={70}
                  height={70}
                />
                <span className="font-semibold">Bộ lọc gió</span>
              </div>
            ))}
          </div>
          <div className="flex max-w-[1200px] flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl leading-0 font-semibold">
                Sản phẩm bán chạy
              </h2>
              <Link href="/" className="flex items-center gap-2 px-3 py-1">
                <span className="text-brand-500 leading-0 font-semibold">
                  Xem tất cả
                </span>
                <Image
                  src="/double-arrow-right.svg"
                  alt="double-arrow-right"
                  width={9.58}
                  height={12.92}
                />
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <ProductCard key={index} showPromotion={false} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Category;
