import { Logo } from '@/components/icons/logo';
import Link from 'next/link';
import Download from '../download';
const Header = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <header className="h-[var(--nav-height)] flex flex-row justify-between pl-[var(--pading-section)] md:pr-[var(--pading-section)] fixed top-0 left-0 z-50 bg-white w-full">
      <Link
        href={'/'}
        className="font-medium flex text-md items-center h-full w-fit mr-4"
      >
        <Logo propClassName="w-[1.8rem] h-[1.8rem] mr-4"></Logo> David Freitas
      </Link>

      <Download href="sad">Download CV</Download>
      {/* <span className="h-fit w-fit flex md:hidden">
        <Hamburger
          toggled={isOpen}
          distance="sm"
          size={24}
          color="#000"
          toggle={setOpen}
        />
      </span> */}
      {/* <nav className="hidden">
        <ul>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Method</Link>
          </li>

          <li>
            <Link href="#">Integrations</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Company</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};
export default Header;
