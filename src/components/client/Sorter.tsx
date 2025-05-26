'use client';

import Segmented from '../ui/Segmented';
import Select from '../ui/Select';

function Sorter() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8">
      <h2 className="text-xl leading-0 font-semibold">Danh sách sản phẩm</h2>
      <div className="flex flex-wrap items-center gap-6">
        <span className="leading-0 font-medium">Sắp xếp theo</span>
        <Segmented />
        <Select />
      </div>
    </div>
  );
}

export default Sorter;
