interface IHomeBannerProps {
  children: React.ReactNode;
}
interface IHomeBannerTitleProps {
  children: React.ReactNode;
}

interface IHomeBannerSubTitleProps {
  children: React.ReactNode;
}

export const HomeBanner = ({ children }: IHomeBannerProps) => {
  return (
    <section className="_pading_section mt-[var(--nav-height)] w-full flex flex-col justify-between pt-12 gap-10 sm:pt-[16.0rem] sm:gap-[12.0rem]">
      <div className=" flex flex-col gap-8  w-full sm:gap-[4.6rem] lg:w-[65%]">
        {children}
      </div>
      <p className="flex text-md gap-3 items-center">
        Scroll Down
        <img src={'/img/home/arrow.png'} className="animate-bounce h-6 "></img>
      </p>
    </section>
  );
};

export const HomeBannerTitle = ({ children }: IHomeBannerTitleProps) => {
  return (
    <h1 className="text-black-900 font-medium text-xl sm:text-3xl">
      {children}
    </h1>
  );
};

export const HomeBannerSubTitle = ({ children }: IHomeBannerSubTitleProps) => {
  return <h3 className="text-black-700 text-md">{children}</h3>;
};
