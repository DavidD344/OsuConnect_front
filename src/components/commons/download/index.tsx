import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Download = ({ children, href }: ButtonProps) => {
  return (
    <Link
      href={`${href}`}
      className="flex items-center justify-center text-white bg-black-900 hover:bg-black-700 h-full py-2 px-5 text-zs"
    >
      {children}
    </Link>
  );
};
export default Download;
