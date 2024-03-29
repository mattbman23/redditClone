import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 mb-4 text-gray-800 text-5x1">Page Not Found</h1>
      <Link href="/">
        <a className="px-4 py-2 blue button">Home</a>
      </Link>
    </div>
  );
}
