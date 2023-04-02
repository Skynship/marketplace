import { Fragment, /* useCallback, useState */ } from "react";
import { DropFooter } from "components/footer";
import Header from "components/header/Header";

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
  // const [isFixed, setIsFixed] = useState(false);
  // const toggleIsFixed = useCallback(fixed => setIsFixed(fixed), []);
  return <Fragment>
      <Header isAbsolute />
      <div className="section-after-sticky">

        {/* BODY CONTENT */}
        {children}
      </div>

      {/* FOOTER */}
      <DropFooter />
    </Fragment>;
};
export default DropLayout;