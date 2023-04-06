import { Fragment } from "react";
import DropFooter from "components/footer/dropFooter";
// import Header from "components/header/Header";

const DropLayout = ({
  children
}) => {
  return <Fragment>
      <div className="section-after-sticky">

        {/* BODY CONTENT */}
        {children}
      </div>

      {/* FOOTER */}
      <DropFooter />
    </Fragment>;
};
export default DropLayout;