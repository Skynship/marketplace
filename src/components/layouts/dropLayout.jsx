import { Fragment, useCallback, useState } from "react";
import Sticky from "components/Sticky";
import Topbar from "components/Topbar";
import { DropFooter } from "components/footer";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import { MobileNavigationBar } from "components/mobile-navigation";
import SearchInputWithCategory from "components/search-box/SearchInputWithCategory";

/**
 *  Used in:
 *  1. market-1, matket-2, gadget-shop,
 *     fashion-shop, fashion-shop-2, fashion-shop-3, furniture-shop, grocery3, gift-shop
 *  2. product details page
 *  3. order-confirmation page
 *  4. product-search page
 *  5. shops and shops-details page
 *  6. checkoutNavLayout and CustomerDashboadLayout component
 */

// ===================================================

// ===================================================

const DropLayout = ({
  children,
  topbarBgColor,
  showTopbar = true,
  showNavbar = true
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback(fixed => setIsFixed(fixed), []);
  return <Fragment>
      {showTopbar && <Topbar bgColor={topbarBgColor} />}
      <Header isAbsolute />
      <div className="section-after-sticky">
        {/* NAVIGATION BAR */}
        {showNavbar && <Navbar elevation={0} border={1} />}

        {/* BODY CONTENT */}
        {children}
      </div>

      {/* FOOTER */}
      <DropFooter />
    </Fragment>;
};
export default DropLayout;