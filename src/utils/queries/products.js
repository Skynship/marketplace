export const productsList = `{
    products(first: 100) {
        edges {
            node {
                id
                title
                description
                handle
                vendor
                seo {
                  description
                  title
                }
                tags
                priceRange {
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
                images(first: 1) {
                    edges {
                        node {
                            src
                            altText
                        }
                    }
                }
            }
        }
    }
}`;