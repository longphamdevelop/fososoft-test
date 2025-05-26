'use client';

import Image from 'next/image';
import Accordion from '../ui/Accordion';

type Props = {
  onSelectCategories?: (keys: string[]) => void;
  onSelectPrices?: (keys: string[]) => void;
  onSelectBrands?: (keys: string[]) => void;
  onSelectMYs?: (keys: string[]) => void;
  onSelectOrigins?: (keys: string[]) => void;
};

function Filter({
  onSelectCategories,
  onSelectPrices,
  onSelectBrands,
  onSelectMYs,
  onSelectOrigins,
}: Props) {
  return (
    <div className="flex h-fit w-[315px] flex-col rounded-lg bg-white py-3">
      <div className="flex items-center gap-3 p-3">
        <Image src="/filter.svg" alt="filter" width={32} height={32} />
        <span className="text-brand-500 text-2xl font-bold">Bộ lọc</span>
      </div>
      <hr className="my-1 border-[#919EAB33]" />
      <Accordion
        defaultOpen
        title="Danh mục sản phẩm"
        body={
          <div className="flex flex-col gap-3">
            {[
              {
                key: 'loc-gio-dong-co-air-filter',
                label: 'Lọc gió Động cơ - Air Filter',
                quanlity: 24,
              },
              {
                key: 'loc-nhien-lieu-fuel-filter',
                label: 'Lọc Nhiên Liệu - Fuel Filter',
                quanlity: 24,
              },
              {
                key: 'bo-loc-dau',
                label: 'Bộ lọc dầu',
                quanlity: 24,
              },
              {
                key: 'chua-phan-loai',
                label: 'Chưa phân loại',
                quanlity: 24,
              },
              {
                key: 'khac',
                label: 'Khác',
                quanlity: 24,
              },
            ].map(({ key, label, quanlity }, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  id={key}
                  type="checkbox"
                  className="accent-brand-600 aspect-square w-5 cursor-pointer rounded-lg !border-[#CECCCA]"
                />
                <label
                  htmlFor={key}
                  className="cursor-pointer text-sm font-medium"
                >
                  {label}
                </label>
                <span className="text-secondary text-sm">({quanlity})</span>
              </div>
            ))}
          </div>
        }
      />
      <hr className="my-1 border-[#919EAB33]" />
      <Accordion
        defaultOpen
        title="Khoảng giá"
        body={
          <div className="flex flex-col gap-3">
            {[
              {
                key: 'duoi-100000-d',
                label: 'Dưới 100,000 đ',
              },
              {
                key: '100000-d-300000-d',
                label: '100,000 đ - 300,000 đ',
              },
              {
                key: '300000-d-500000-d',
                label: '300,000 đ - 500,000 đ',
              },
              {
                key: 'tren-500000-d',
                label: 'Trên 500,000 đ',
              },
            ].map(({ key, label }, index) => (
              <div key={index} className="flex items-center gap-2">
                <input id={key} type="checkbox" className="peer/cp hidden" />
                <label
                  htmlFor={key}
                  className="peer-checked/cp:border-brand-500 flex h-9 w-full cursor-pointer items-center justify-center rounded-sm border-2 border-[#919EAB3D] text-sm"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        }
      />
      <hr className="my-1 border-[#919EAB33]" />
      <Accordion
        defaultOpen
        title="Thương hiệu"
        body={
          <div className="flex flex-col gap-3">
            {[
              {
                key: 'asakashi',
                label: 'Asakashi',
                quanlity: 24,
              },
              {
                key: 'bosch',
                label: 'Bosch',
                quanlity: 24,
              },
              {
                key: 'huyndai',
                label: 'Huyndai',
                quanlity: 24,
              },
            ].map(({ key, label, quanlity }, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  id={key}
                  type="checkbox"
                  className="accent-brand-600 aspect-square w-5 cursor-pointer rounded-lg border-[#CECCCA]"
                />
                <label
                  htmlFor={key}
                  className="cursor-pointer text-sm font-medium"
                >
                  {label}
                </label>
                <span className="text-secondary text-sm">({quanlity})</span>
              </div>
            ))}
          </div>
        }
      />
      <hr className="my-1 border-[#919EAB33]" />
      <Accordion
        defaultOpen
        title="Năm sản xuất"
        body={
          <div className="flex flex-col gap-3">
            {[
              {
                key: '2021',
                label: '2021',
                quanlity: 24,
              },
              {
                key: '2020',
                label: '2020',
                quanlity: 24,
              },
              {
                key: '2019',
                label: '2019',
                quanlity: 24,
              },
              {
                key: '2018',
                label: '2018',
                quanlity: 24,
              },
            ].map(({ key, label, quanlity }, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  id={key}
                  type="checkbox"
                  className="accent-brand-600 aspect-square w-5 cursor-pointer rounded-lg border-[#CECCCA]"
                />
                <label
                  htmlFor={key}
                  className="cursor-pointer text-sm font-medium"
                >
                  {label}
                </label>
                <span className="text-secondary text-sm">({quanlity})</span>
              </div>
            ))}
          </div>
        }
      />
      <hr className="my-1 border-[#919EAB33]" />
      <Accordion
        defaultOpen
        title="Xuất xứ"
        body={
          <div className="flex flex-col gap-3">
            {[
              {
                key: 'duc',
                label: 'Đức',
                quanlity: 24,
              },
              {
                key: 'nhat-ban',
                label: 'Nhật Bản',
                quanlity: 24,
              },
              {
                key: 'trung-quoc',
                label: 'Trung Quốc',
                quanlity: 24,
              },
            ].map(({ key, label, quanlity }, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  id={key}
                  type="checkbox"
                  className="accent-brand-600 aspect-square w-5 cursor-pointer rounded-lg border-[#CECCCA]"
                />
                <label
                  htmlFor={key}
                  className="cursor-pointer text-sm font-medium"
                >
                  {label}
                </label>
                <span className="text-secondary text-sm">({quanlity})</span>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}

export default Filter;
