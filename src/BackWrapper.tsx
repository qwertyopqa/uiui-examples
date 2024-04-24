// Note: BackWrapper Component
type Args = {
    children: JSX.Element[] | JSX.Element;
};

export function BackWrapper({children}: Args) {
  return (
    <div>
        <a href="/" id="bti">&lt; Back to Index</a>
        {children}
    </div>
  );
}