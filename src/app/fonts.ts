import { Fira_Code, Roboto_Mono, Source_Sans_3 } from 'next/font/google';

export const sourceSans = Source_Sans_3({
  weight: ['200', '300', '400', '600', '700', '900', '500'],
  subsets: ['latin'],
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
});

export const inter = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

