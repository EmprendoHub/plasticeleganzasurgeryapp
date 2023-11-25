import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const POST = async (request) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const reqBody = await request.json();
    const { items, email } = await reqBody;
    const extractingItems = await items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'mxn',
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: item.imageUrls,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: extractingItems,
      mode: 'payment',
      success_url: `https://eleganzaplasticsurgery.com/exito`,
      cancel_url: `https://eleganzaplasticsurgery.com/`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      message: 'Connection is active',
      success: true,
      id: session.id,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
