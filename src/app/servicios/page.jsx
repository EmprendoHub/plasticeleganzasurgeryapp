import React from 'react';
import ListProducts from '@/components/products/ListProducts';
import MainServicesComponent from '@/components/services/MainServicesComponent';
import PageTransition from '@/components/transitions/PageTransition';
import getAllJsonlProducts from '@/data/localproducts.json';

const ServiciosPage = async () => {
  console.log(getAllJsonlProducts);
  const data = await getAllJsonlProducts;
  const products = data;
  return (
    <div>
      <PageTransition />
      <MainServicesComponent />
      <ListProducts products={products} />
    </div>
  );
};

export default ServiciosPage;
