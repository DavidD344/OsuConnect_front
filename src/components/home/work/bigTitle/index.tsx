interface IBigTitleProps {
  children: React.ReactNode;
}

const BigTitle = ({ children }: IBigTitleProps) => {
  return (
    <h2 className="font-medium text-black-900 text-lg sm:text-2xl">
      {children}
    </h2>
  );
};
export default BigTitle;
