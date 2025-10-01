const getAllProducts = async () => {
  // Skip API call during build time to prevent connection errors
  if (process.env.NODE_ENV === "production" && !process.env.VERCEL_URL) {
    return [];
  }

  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_NEXTAUTH_URL || "http://localhost:3000";

  const URL = `${baseURL}/api/servicios`;

  try {
    const res = await fetch(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "GET, POST, PUT",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const datas = await res.json();
    return datas.products || [];
  } catch (error) {
    console.log("Sitemap fetch error:", error);
    return []; // Return empty array on error to prevent build failure
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
