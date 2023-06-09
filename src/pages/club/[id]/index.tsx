import { DeptCaptionType } from '@/types/type';
import { GetServerSideProps } from 'next/types';
import ClubInfo from '@/components/club/ClubInfo';
import Image from 'next/image';
import Link from 'next/link';

const dummy = [
  {
    id: 1,
    name: '명지서법',
    tag: '서예',
    category: '학술',
  },
  {
    id: 2,
    name: 'TIME',
    tag: '영어',
    category: '학술',
  },
  {
    id: 3,
    name: 'MIRS',
    tag: '기업분석',
    category: '학술',
  },
  {
    id: 4,
    name: '통해',
    tag: '통기타',
    category: '언행예술',
  },
  {
    id: 5,
    name: '흑풍',
    tag: '흑인음악',
    category: '언행예술',
  },
  {
    id: 6,
    name: '주리랑',
    tag: '창작음악',
    category: '언행예술',
  },
  {
    id: 7,
    name: '화이트홀스',
    tag: '밴드',
    category: '언행예술',
  },
  {
    id: 8,
    name: 'MGH',
    tag: '댄스',
    category: '언행예술',
  },
  {
    id: 9,
    name: '극예술연구회 알',
    tag: '연극',
    category: '언행예술',
  },
  {
    id: 10,
    name: '너나들이',
    tag: '건축봉사',
    category: '봉사',
  },
  {
    id: 11,
    name: 'RCY',
    tag: '적십자',
    category: '봉사',
  },
  {
    id: 12,
    name: 'PTPI',
    tag: '연합활동',
    category: '봉사',
  },
  {
    id: 13,
    name: '키비탄',
    tag: '아동봉사',
    category: '봉사',
  },
  {
    id: 14,
    name: '코아',
    tag: '광고',
    category: '전시창작',
  },
  {
    id: 15,
    name: '디비전',
    tag: '영상',
    category: '전시창작',
  },
  {
    id: 16,
    name: '포토랩',
    tag: '사진',
    category: '전시창작',
  },
  {
    id: 17,
    name: '그림패시만화',
    tag: '그림',
    category: '전시창작',
  },
  {
    id: 18,
    name: '씨네메이션',
    tag: '서브컬쳐',
    category: '전시창작',
  },
  {
    id: 19,
    name: 'C.C.C',
    tag: '기독교',
    category: '종교',
  },
  {
    id: 20,
    name: '실로암',
    tag: '기독교',
    category: '종교',
  },
  {
    id: 21,
    name: 'CFM',
    tag: '수화찬양',
    category: '종교',
  },
  {
    id: 22,
    name: 'UBF',
    tag: '성경',
    category: '종교',
  },
  {
    id: 23,
    name: '대건안드레아',
    tag: '가톨릭',
    category: '종교',
  },
  {
    id: 24,
    name: '콕콕콕',
    tag: '배드민턴',
    category: '체육',
  },
  {
    id: 25,
    name: 'MJTA',
    tag: '테니스',
    category: '체육',
  },
  {
    id: 26,
    name: '바다이야기',
    tag: '스킨스쿠버',
    category: '체육',
  },
  {
    id: 27,
    name: '무릉도원',
    tag: '검도',
    category: '체육',
  },
  {
    id: 28,
    name: '나이너스',
    tag: '야구',
    category: '체육',
  },
  {
    id: 29,
    name: '삼박자',
    tag: '족구',
    category: '체육',
  },
  {
    id: 30,
    name: '굴렁쇠',
    tag: '자전거',
    category: '체육',
  },
  {
    id: 31,
    name: '파인',
    tag: '농구',
    category: '체육',
  },
  {
    id: 32,
    name: 'FC명지',
    tag: '축구',
    category: '체육',
  },
  {
    id: 33,
    name: '오버행',
    tag: '클라이밍',
    category: '체육',
  },
  {
    id: 34,
    name: '명지챌린저스',
    tag: '챌린지',
    category: '사회연구',
  },
  {
    id: 35,
    name: 'SK루키',
    tag: '소셜벤처',
    category: '사회연구',
  },
  {
    id: 36,
    name: '인액터스',
    tag: '사회문제',
    category: '사회연구',
  },
  {
    id: 37,
    name: '농어민후생연구회 흙',
    tag: '농활',
    category: '사회연구',
  },
  {
    id: 38,
    name: '비주얼',
    tag: '토론',
    category: '사회연구',
  },
];

const deptCaption: DeptCaptionType = {
  학술: 'bg-green-100 text-green-500',
  언행예술: 'bg-orange-100 text-orange-500',
  봉사: 'bg-yellow-100 text-yellow-500',
  전시창작: 'bg-purple-100 text-purple-500',
  종교: 'bg-blue-100 text-blue-500',
  체육: 'bg-pink-100 text-pink-500',
  사회연구: 'bg-cyan-100 text-cyan-500',
};

const content = [
  '안녕하세요 명지서법입니다!',
  '저희는 47년 정통 동아리로, 명지대학교에서 가장 넓은 동아리 방을 사용 중이에요!',
  '매주 수요일마다 강습회를 진행 중이고 선생님께서 직접 지도해주십니다.',
  '또한, 매년 두 번의 전시회를 진행하고 있으며 간식 행사, 인사동 나들이 등 다양한 활동도 진행할 예정이에요.',
  '편하고 따뜻한 분위기에서 서예를 쓰고 싶은 학우들 모두 환영합니다!',
];

export default function Index({ clubId }: { clubId: number }) {
  const item = dummy[clubId - 1];

  return (
    <>
      <div className="mt-30 mb-8 w-full sm:mt-40">
        <div className="flex items-center">
          <h1 className="mr-4 inline text-2xl font-bold sm:mr-6 sm:text-3xl">
            {item.name}
          </h1>
          <span
            className={`mr-1 rounded-lg px-2 py-1 text-sm font-semibold shadow-sm sm:text-base ${
              deptCaption[item.category]
            }`}
          >
            {item.category}
          </span>
          <span className="ml-1 rounded-lg bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-600 shadow-sm sm:text-base">
            {item.tag}
          </span>
        </div>
        <ClubInfo />
        <div className="mt-6 text-base font-bold sm:mt-8 sm:text-xl">
          동아리 소개
        </div>
        <div className="mt-2 rounded-lg bg-white px-5 py-4 shadow-sm sm:px-7 sm:py-6">
          {content.map((line, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index} className="text-base font-medium sm:text-lg">
              {line}
            </p>
          ))}
          <div className="mt-2 flex flex-col items-center justify-center">
            <Image
              src="/default.svg"
              width={1000}
              height={1000}
              priority
              alt="default"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mb-8 flex justify-end">
        <Link
          href="/"
          className="rounded-lg bg-gray-200 bg-opacity-70 px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition-opacity hover:opacity-50 sm:px-5 sm:text-base"
        >
          이전으로 돌아가기
        </Link>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any;
}) => {
  const { id } = context.query;
  return {
    props: {
      clubId: id,
    },
  };
};
