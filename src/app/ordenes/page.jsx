import ContainerComponent from '@/components/containers/ContainerComponent';
import OrderDetailsComponent from '@/components/orders/OrderDetailsComponent';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PageTransition from '@/components/transitions/PageTransition';

export const metadata = {
  metadataBase: new URL('https://www.eleganzaplasticsurgery.com/'),
  title: 'Ordenes | Eleganza Plastic Surgery | Cirugía Plástica',
  description: 'Explora tu historial de procedimientos',
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

const OrdersPage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }

  return (
    <>
      <PageTransition />
      <ContainerComponent>
        <OrderDetailsComponent />
      </ContainerComponent>
    </>
  );
};

export default OrdersPage;
