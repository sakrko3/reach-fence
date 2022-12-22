import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

const Root = (props: Props) => {
  return (
    <Fragment>
      <Navbar />
      <div className="px-4">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Root;
