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


// aesthetician: metafield(namespace: "custom", key: "aesthetician") {
//     full_name
// }

export const getProductByHandle = (handle) => `{
    product(handle: "${handle}") {
        id
        title
        description
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
}`