import { Logo } from '@/components/icons/logo';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="h-[var(--header-height)] w-full flex flex-row items-center justify-between gap-4 _pading_section fixed top-0 left-0 z-50 bg-white border-2 border-black-900 ">
      <Link
        href={'/'}
        className="font-medium flex text-md items-center h-full w-fit"
      >
        <Logo propClassName="w-[3.2rem] h-[3.2rem] mr-4"></Logo>
        OsuConnect
      </Link>

      <div className="flex flex-row w-fit h-fit gap-4 items-center">
        <div className="w-[3.0rem] h-[2.0rem] bg-blue cursor-pointer"></div>
        <div className=" w-[4.0rem] h-[4.0rem] rounded-full bg-blue cursor-pointer"></div>
      </div>
    </header>
  );
};
export default Header;

// {
//   /* <input
//   type="text"
//   className="h-[4rem] w-[40rem] border-2 rounded-[3rem] pl-[1.5rem] pr-[1.5rem] border-black-900 bg-gray text-zs font-semibold"
// /> */
// }
