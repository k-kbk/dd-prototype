import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  /** 현재 경로 */
  const curPath = router.pathname;

  return (
    <header className="fixed z-10 flex h-16 w-full items-center justify-center bg-white px-4 shadow-sm">
      <div className="flex w-full max-w-screen-lg items-center justify-between">
        <Link href="/" className="px-3">
          <Image
            src="/logo.svg"
            width={1}
            height={1}
            alt="myongji-club"
            priority
          />
        </Link>
        <div>
          <Link
            href="/"
            className={`rounded-lg px-3 py-3 font-semibold ${
              curPath === '/' ? 'text-indigo-700' : 'text-gray-700'
            } mx-1 transition-colors hover:text-indigo-700`}
          >
            홈
          </Link>
          <Link
            href="/notice"
            className={`rounded-lg px-3 py-3 font-semibold ${
              curPath.includes('notice') ? 'text-indigo-700' : 'text-gray-700'
            } mx-1 transition-colors hover:text-indigo-700`}
          >
            공지사항
          </Link>
        </div>
      </div>
    </header>
  );
}
