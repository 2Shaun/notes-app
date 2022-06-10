export const links = () => [{ rel: "stylesheet", href: styles }];

export const Sidepanel = ({ children, isOpen }) => {
  return (
    <aside
      className={`${isOpen ? "sidepanel-open" : "sidepanel-close"} sidepanel`}
    >
      {children}
    </aside>
  );
};
