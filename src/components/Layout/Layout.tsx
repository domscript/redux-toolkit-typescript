import { Fragment } from "react";
import { MainHeader } from "./MainHeader";

export const Layout = (props: any) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};
