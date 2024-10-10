const getAllProducts = async () => {
  const URL = `${process.env.NNEXT_PUBLIC_EXTAUTH_URL}/api/servicios`;

  try {
    const res = await fetch(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "GET, POST, PUT",
      },
    });

    const datas = await res.json();
    return datas.products;
  } catch (error) {
    console.log(error);
  }
};

export default async function sitemap() {
  const baseUrl = "https://www.eleganzaplasticsurgery.com";
  // Get all products
  const products = await getAllProducts();
  const productUrls =
    products?.map((product) => {
      return {
        url: `${baseUrl}/servicio/${product?._id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: "https://www.eleganzaplasticsurgery.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.eleganzaplasticsurgery.com/acerca",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.eleganzaplasticsurgery.com/contacto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.eleganzaplasticsurgery.com/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.eleganzaplasticsurgery.com/testimonios",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...productUrls,
  ];
}
