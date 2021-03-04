import React, { FC } from "react";

const Layout: FC = (props) => {
  return <div className="layout-container">{props.children}</div>;
};

export default Layout;
