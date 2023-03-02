export const ComingSoon = () => <Content header="Coming Soon!" />;
export const Loading = () => <Content header="Loading..." />;
export const NotFound = () => <Content header="404 :: Page Not Found" />;

const Content = ({ header, children }) => {
  return (
    <div>
      <h1 className="text-center text-muted">
        <em>{header}</em>
      </h1>
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default Content;
