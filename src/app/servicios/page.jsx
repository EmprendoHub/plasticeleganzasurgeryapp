import React from 'react';
import ListProducts from '@/components/products/ListProducts';
import MainServicesComponent from '@/components/services/MainServicesComponent';
import PageTransition from '@/components/transitions/PageTransition';
import { getProducts } from '@/helpers';

const ServiciosPage = async () => {
  const data = await getProducts();
  const products = data.products;
  return (
    <div>
      <PageTransition />
      <MainServicesComponent />
      <ListProducts products={products} />
    </div>
  );
};

export default ServiciosPage;
