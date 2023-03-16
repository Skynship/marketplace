import { Fragment, useCallback, useState } from "react";
import { Box } from "@mui/material";
import Sticky from "components/Sticky";
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

const ShopLayout1 = ({
  children,
  isLogoShown = true,
  sxSectionAfterSticky={},
  isCartShown = true,
  rightChildren = [],
  isHeaderFixed = true
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback(fixed => setIsFixed(fixed), []);
  return <Fragment>
      {/* HEADER */}
      {
        isHeaderFixed ? (
          <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
            <Header isLogoShown={isLogoShown} isFixed={isFixed} isCartShown={isCartShown} rightChildren={rightChildren} />
          </Sticky>
        ) : (
          <Header isLogoShown={isLogoShown} isCartShown={isCartShown} rightChildren={rightChildren} />
        )
      }

      <Box className="section-after-sticky" sx={sxSectionAfterSticky}>
        {/* BODY CONTENT */}
        {children}
      </Box>

      {/* FOOTER */}
      <DropFooter />
    </Fragment>;
};
export default ShopLayout1;