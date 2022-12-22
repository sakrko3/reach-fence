import { Fragment } from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Root = (props: Props) => {
  return (
    <Fragment>
      <h1>Root</h1>
      <Outlet />
    </Fragment>
  );
};

export default Root;
