import { Fragment} from "react";
import DropFooter from "components/footer/dropFooter";
// import Header from "components/header/Header";

const DropLayout = ({
  children,
  topbarBgColor,
  showTopbar = true,
  showNavbar = true
}) => {
  return <Fragment>
      {/*<Header isAbsolute />*/}
      <div className="section-after-sticky">

        {/* BODY CONTENT */}
        {children}
      </div>

      {/* FOOTER */}
      <DropFooter />
    </Fragment>;
};
export default DropLayout;