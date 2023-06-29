import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}
const buttonClasses = cva(
  'rounded-full inline-flex items-center font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-primary-gradient hover:text-shadow hover:shadow-primary',
        secondary: '',
        tertiary: '',
      },
      size: {
        small: 'text-xl px-3 h-7',
        medium: 'text-sm px-4 h-8',
        large: 'text-md px-6 h-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);

const Button = ({ children, href, variant }: ButtonProps) => {
  return (
    <Link href={`${href}`} className={buttonClasses()}>
      {children}
    </Link>
  );
};
export default Button;
