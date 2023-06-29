import BigTitle from '../bigTitle';

interface IWorkFeaturedProps {
  children: React.ReactNode;
  title: string;
}
const WorkFeatured = ({ children, title }: IWorkFeaturedProps) => {
  return (
    <section className="_pading_section flex flex-col w-full ">
      <BigTitle>{title}</BigTitle>
      <div>{children}</div>
    </section>
  );
};
export default WorkFeatured;
