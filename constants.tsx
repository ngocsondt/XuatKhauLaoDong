
import { Program, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Chương trình', href: '#programs' },
  { label: 'Giá trị cốt lõi', href: '#values' },
  { label: 'Liên hệ', href: '#contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'japan',
    title: 'Thực tập sinh kỹ năng',
    country: 'Nhật Bản',
    tag: 'Hot',
    description: 'Chương trình thực tập sinh kỹ năng và kỹ sư chất lượng cao. Thu nhập hấp dẫn, môi trường chuyên nghiệp.',
    benefits: ['Lương từ 30-50 triệu VNĐ', 'Hỗ trợ nhà ở & bảo hiểm'],
    requirements: ['JLPT N4+', 'Tuổi 18-30'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCNFzoKhouig0twSnTbz2S8t-7BM0S-MhxV4dAvPnoFAf6rZuBCp-Kmbi_cXSb7Lfqzyw4IHywr_9UH6JqzLb4fMu2gY6NurNXl9kN1sAKzk52t2QFUVgUnipadO0BZuc2obn9VuObmxDJ8l8YMsgupLauyb0AsG1Y75ZWXYOEYUU7fqFOrvNTfCjM4WLB968m-tvHirMh_uSN38mQ14-UqTWdJyh1CiJlTU3JHRsqtKkbnfLu16RNkF9f2MHBo6-P8Yh9PPNTeTcy',
    details: {
      duration: '1 - 3 Năm',
      location: 'Tokyo, Osaka, Nagoya',
      requirementsDetail: 'Tốt nghiệp THPT, trình độ tiếng Nhật N4 trở lên.'
    }
  },
  {
    id: 'korea',
    title: 'Du học & Visa E7',
    country: 'Hàn Quốc',
    description: 'Du học hệ đại học, thạc sĩ và visa lao động E7. Cơ hội định cư và làm việc tại các tập đoàn lớn.',
    benefits: ['Học bổng lên đến 100%', 'Visa thẳng, không phỏng vấn'],
    requirements: ['TOPIK 3+', 'Tốt nghiệp THPT'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQlR1A2cx8XJnuC9k-09ypWiNPakSBddKFMdIxN6FY4sWhJiy1k9M5q2zvFvKFwPcMfEPGyKH9PjLPWZ-6AvhXdbiACwvcb7wImkOObcEFY1uSpDyh-_KWZkkMh3Y2UaVr2BBXDyg6q_pMD1IvYFYcPQTg3JAvduKPs2d2oslwfYC0b26SSr87GFTY1UnglHlNQleDeqg5_vM0ehz9lNYWqOsAXvfECa1R21txSNCTIj0zT51tyyoWJum8vFnX98kwnKq410PXu24r',
    details: {
      duration: '2 - 4 Năm',
      location: 'Seoul, Busan, Incheon',
      requirementsDetail: 'GPA từ 7.0, ưu tiên ứng viên có chứng chỉ TOPIK.'
    }
  },
  {
    id: 'germany',
    title: 'Du học nghề kép',
    country: 'Đức',
    description: 'Vừa học vừa làm có lương. Miễn 100% học phí, nhận lương thực tập từ 25-40 triệu mỗi tháng.',
    benefits: ['Miễn học phí chuyên ngành', 'Cam kết việc làm sau tốt nghiệp'],
    requirements: ['Tiếng Đức B1', 'Dưới 35 tuổi'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZa4I2HlQw2nMVaBb6wMk9h2_9vZUtQS-VgIQDcWYdUkiiCvZQYfkkYbECkD68Pe6tOIIYmES7hvIAo2i1atHVIKWKFqAAUiiwr-Vws1zGAqcQiZSoW8gPsagrJFmMP6qZ4aa8d8h-nowTliy61tAveg28hWA_kxxfeILi4SB55BM4tOTbTjlaMrF1tjxgKws3AHdvZ9Hfy0_LkYXlys3OvZ3NbIoe1_aC2yyC-BD9oWlFeQd_HejvXVs1-EfA29ssorSJRu8HYLPt',
    details: {
      duration: '3 Năm',
      location: 'Berlin, Munich, Hamburg',
      requirementsDetail: 'Chứng chỉ tiếng Đức B1/B2, sức khỏe tốt.'
    }
  }
];
