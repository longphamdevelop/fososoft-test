import ListProduct from '@/components/client/ListProduct';
import DecorCard from '@/components/server/DecorCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Banner from '@/components/server/Banner';
import Filter from '@/components/client/Filter';
import Sorter from '@/components/client/Sorter';

export default function Home() {
  return (
    <div className="extra:px-60 flex flex-col px-3 xl:px-5">
      <Breadcrumbs />
      <Banner />
      <div className="my-8 flex flex-wrap gap-5">
        <Filter />
        <div className="flex flex-1 flex-col flex-wrap gap-5">
          <Sorter />
          <ListProduct />
        </div>
      </div>
      <div className="grid gap-8 py-10 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            img: '/money.svg',
            title: 'Miễn phí vận chuyển',
            description: 'Với hoá đơn từ 1 triệu',
          },
          {
            img: '/support.svg',
            title: 'Hỗ trợ 24/7',
            description:
              'Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm',
          },
          {
            img: '/delivery.svg',
            title: 'Giao hàng nhanh 2h',
            description: 'Trong vòng bán kính 10km nội thành TP HCM',
          },
          {
            img: '/package.svg',
            title: '30 ngày đổi trả',
            description:
              'Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển',
          },
        ].map((props, index) => (
          <DecorCard key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
