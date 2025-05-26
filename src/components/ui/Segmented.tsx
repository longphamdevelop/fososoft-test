'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

function Segmented({ onChange }: { onChange?: (key: string) => void }) {
  const [selectedKey, setSelectedKey] = useState('lien-quan');

  useEffect(() => {
    onChange?.(selectedKey);
  }, [selectedKey]);

  return (
    <div className="flex flex-wrap gap-3">
      {[
        { key: 'lien-quan', label: 'Liên quan' },
        { key: 'ban-chay', label: 'Bán chạy' },
        { key: 'moi-nhat', label: 'Mới nhất' },
        { key: 'noi-bat', label: 'Nổi bật' },
      ].map(({ key, label }, index) => (
        <div
          key={index}
          className={`relative cursor-pointer rounded-lg bg-white px-4 py-2 text-xl font-semibold ${key === selectedKey ? 'text-brand-500' : 'text-primary'}`}
          onClick={() => setSelectedKey(key)}
        >
          {label}

          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            animate={key === selectedKey ? 'active' : 'inactive'}
            variants={{
              active: { opacity: 1 },
              inactive: { opacity: 0 },
            }}
          >
            <div className="border-brand-500 absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded-lg border">
              <Image
                src="/top-right-tag.svg"
                alt="top-right-tag"
                width={25.16}
                height={23.29}
                className="absolute top-0 right-0 scale-125"
              />
              <Image
                src="/unread.svg"
                alt="check-icon"
                width={12}
                height={12}
                className="absolute top-[1px] right-[1px]"
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Segmented;
