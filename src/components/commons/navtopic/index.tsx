import { Logo } from '@/components/icons/logo';
import Link from 'next/link';

interface INavLinks {
  text: string;
  link: string;
}
const navLinks: INavLinks[] = [
  { text: 'Feed', link: '/' },
  { text: 'Explore', link: '/' },
  { text: 'Explore', link: '/' },

  { text: 'Explore', link: '/' },

  { text: 'Explore', link: '/' },

  { text: 'Explore', link: '/' },
];

const NavTopic = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    // <nav className="h-[calc(100vh-var(--nav-height))] w-[25rem] flex flex-row items-center justify-between gap-4 _pading_section fixed top-[var(--nav-height)] left-0 z-50 bg-white border-2 border-black-900 ">
    <div className="w-full h-[calc(100vh-var(--nav-bot-height)-var(--header-height))]">
      <nav className="pl-[var(--pading-section)]  pr-[var(--pading-section)] h-[4.8rem] w-full flex flex-row justify-between items-center fixed bottom-0 left-0 bg-white border-2 border-black-900 md:h-[calc(100vh-var(--header-height))] md:w-[6.8rem] md:flex-col md:justify-start md:gap-8 md:pt-8 lg:w-[25rem] lg:pl-[var(--pading-section)] lg:items-start">
        {navLinks
          ? navLinks.map(({ link, text }) => {
              return (
                <Link
                  href={link}
                  className="font-medium flex justify-center items-center h-fit w-fit cursor-pointer lg:gap-4 lg:text-sm"
                >
                  <Logo propClassName="w-[3.2rem] h-[3.2rem]"></Logo>
                  <p className="h-fit w-max hidden lg:flex">{text}</p>
                </Link>
              );
            })
          : ''}
        {/* <Link
        href={'/'}
        className="font-medium flex text-md items-center h-full w-fit"
        >
        <Logo propClassName="w-[1.8rem] h-[1.8rem] mr-4"></Logo> OsuConnect
      </Link> */}
      </nav>
    </div>
  );
};
export default NavTopic;
