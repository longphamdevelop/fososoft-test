'use client';

import Image from 'next/image';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

function Searchbox() {
  const [search, setSearch] = useState('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 500),
    [],
  );

  return (
    <div className="border-brand-500 order-3 flex h-16 flex-1 items-center gap-5 rounded-full border-2 p-2 lg:order-2">
      <input
        type="text"
        spellCheck="false"
        placeholder="Tìm sản phẩm"
        className="flex-1 border-none bg-transparent px-3 tracking-wide outline-none"
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      <button className="cursor-pointer border-none outline-none">
        <Image src="/camera.svg" alt="camera" width={28} height={28} />
      </button>
      <button
        type="submit"
        onClick={() => console.log(search)}
        className="bg-brand-500 flex h-12 w-[76px] cursor-pointer justify-center rounded-full border-none outline-none"
      >
        <Image src="/magnifer.svg" alt="magnifer" width={28} height={28} />
      </button>
    </div>
  );
}

export default Searchbox;
