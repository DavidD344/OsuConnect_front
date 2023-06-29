interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementsProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementsProps) => {
  return <h1 className="text-5xl my-5">{children}</h1>;
};
export const HeroSubTitle = ({ children }: HeroElementsProps) => {
  return <p className="text-lg mb-8">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <>
      <div className="text-center">{children}</div>
    </>
  );
};
