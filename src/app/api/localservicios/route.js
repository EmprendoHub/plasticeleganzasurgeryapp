import { NextResponse } from 'next/server';
import data from '@/data/localproducts.json';

export const GET = async () => {
  try {
    const products = data;
    const response = NextResponse.json({
      message: 'Local Products fetched successfully',
      success: true,
      products,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Products loading error',
      },
      { status: 500 }
    );
  }
};
