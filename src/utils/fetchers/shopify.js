export default async function shopifyFetch({ query, variables }) {
  const shopifyStore = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_API_TOKEN;
  const apiVersion = process.env.SHOPIFY_API_VERSION;

  const absoluteUrl = `https://${shopifyStore}.myshopify.com/api/${apiVersion}/graphql.json`;

  try {
    const result = await fetch(absoluteUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      },
      body: { query, variables } && JSON.stringify({ query, variables })
    });

    const data = await result.json();

    return {
      status: result.status,
      ...data
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: error.message
    };
  }
}