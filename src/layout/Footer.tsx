import Link from 'next/link';
import Image from 'next/image';
import FooterCol from '@/components/server/FooterCol';

function Footer() {
  return (
    <div
      className="extra:px-60 flex w-full flex-wrap justify-between gap-8 bg-cover bg-center bg-no-repeat px-3 py-24 xl:px-5"
      style={{
        backgroundImage: `url('/bg-footer.svg')`,
      }}
    >
      <FooterCol
        title="Viet Hung Auto Production Trading Joint Stock Company"
        titleClassName="text-xl uppercase"
        body={[
          {
            label: 'Tax code',
            text: '0305094228',
          },
          {
            label: 'Address',
            text: '13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.',
          },
          {
            label: 'Phone number',
            text: '0283 760 7607',
          },
          {
            label: 'Opening hour',
            text: '09:00 - 22:00 from Mon - Fri',
          },
        ].map(({ label, text }, index) => (
          <p key={index}>
            {label}:&ensp;<span className="font-semibold">{text}</span>
          </p>
        ))}
        extra={
          <Link href="/" className="w-fit">
            <Image
              src="/bo-cong-thuong.svg"
              alt="bo-cong-thuong"
              width={200}
              height={75.67}
            />
          </Link>
        }
      />
      <FooterCol
        title="Sitemap"
        body={['About', 'Article', 'Cart', 'Contact'].map((label, index) => (
          <Link key={index} href="/" className="hover:underline">
            {label}
          </Link>
        ))}
      />
      <FooterCol
        title="Legal"
        body={[
          '__ Privacy policy',
          'Cookie policy',
          'Delivery policy',
          'FAQs',
        ].map((label, index) => (
          <Link
            key={index}
            href="/"
            className={`hover:underline ${index === 0 ? 'text-primary font-semibold' : ''}`}
          >
            {label}
          </Link>
        ))}
      />
      <FooterCol
        title="Download App"
        body={[
          {
            img: '/play-store-fill.svg',
            widthIcon: 30,
            heightIcon: 30,
            alt: 'play-store-fill',
            backgroundColor: '#1C252E',
            cta: 'Get It On',
            source: 'Google Play Store',
          },
          {
            img: '/apple-brand.svg',
            widthIcon: 36,
            heightIcon: 36,
            alt: 'apple-brand',
            backgroundColor: '#0373F3',
            cta: 'Download from',
            source: 'Apple App Store',
          },
        ].map(
          (
            { img, widthIcon, heightIcon, alt, backgroundColor, cta, source },
            index,
          ) => (
            <Link
              key={index}
              href="/"
              className="flex h-16 w-[230px] items-center gap-5 rounded-xl px-5 py-[18px] text-white"
              style={{ backgroundColor }}
            >
              <Image
                src={img}
                alt={alt}
                height={widthIcon}
                width={heightIcon}
              />
              <div className="flex flex-col">
                <span className="text-sm">{cta}</span>
                <span className="font-semibold">{source}</span>
              </div>
            </Link>
          ),
        )}
        extra={
          <div className="flex justify-end">
            <div className="flex cursor-pointer items-center gap-2">
              <Image
                src="vietnam-circle.svg"
                width={36}
                height={36}
                alt="vi-circle"
              />
              <span className="text-xl font-medium">VI</span>
              <Image
                src="down-arrow.svg"
                width={16}
                height={16}
                alt="down-arrow"
              />
            </div>
          </div>
        }
      />
    </div>
  );
}

export default Footer;
