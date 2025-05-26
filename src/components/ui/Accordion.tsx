'use client';

import Image from 'next/image';
import { memo, useState } from 'react';
import { motion } from 'motion/react';

type Props = {
  title: string;
  body: React.ReactNode;
  defaultOpen?: boolean;
};

function Accordion({ title, body, defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-3">
        <span className="text-xl font-semibold">{title}</span>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
          transition={{ duration: 0.3 }}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
        >
          <Image
            src="/up-arrow.svg"
            alt="up-arrow"
            width={24}
            height={24}
            className="rotate-180"
          />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 1, height: 'fit-content' }}
        transition={{ duration: 0.3 }}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'fit-content' },
          closed: { opacity: 0, height: 0 },
        }}
      >
        <div className="px-3 pt-4 pb-3">{body}</div>
      </motion.div>
    </div>
  );
}

export default memo(Accordion);
