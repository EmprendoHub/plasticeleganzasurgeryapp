import ProductDetails from '@/components/products/ProductDetails';
import PageTransition from '@/components/transitions/PageTransition';
import React from 'react';
import { getOneLocalProduct } from '@/helpers';

// or Dynamic metadata
export async function generateMetadata({ params }) {
  try {
    const product = await getOneLocalProduct(params.id);

    if (!product)
      return {
        title: 'No se Encontró',
        description: 'La Pagina que buscabas no existe',
      };
    return {
      title: product.title,
      description: product.description,
      alternates: {
        canonical: `/servicio/${params.id}`,
        languages: {
          'en-US': `/en/servicio/${params.id}`,
          'es-MX': `/es/servicio/${params.id}`,
        },
        twitter: {
          card: 'summary_large_image',
          title: product.title,
          description: product.description,
          siteId: 'Eleganza Plastic Surgery',
          creator: 'Emprendomex Marketing',
          creatorId: '98273409872134',
          images: product.imageUrls,
        },
      },
    };
  } catch (error) {
    return {
      title: 'No se Encontró',
      description: 'La Pagina que buscabas no existe',
    };
  }
}

const DetailsPage = async (ctx) => {
  const id = ctx?.params.id;
  const product = await getOneLocalProduct(id);
  return (
    <>
      <PageTransition />
      <ProductDetails ctx={ctx} product={product} />;
    </>
  );
};

export default DetailsPage;
