export const API_URL: string =
  'https://mockend.com/api/aximilli1212/fake-ecommerce-api/products';

export interface Product {
  imageUrl: string;
  title: string;
  price: number;
  description: string;
}

export const PRODUCT = {
  item: {
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png',
    title: 'Nike',
    price: 450.0,
    description:
      "Here's to new beginnings between you and the pavement. Lace up the 100% recycled laces and set the pace at the start of your running journey with the plush feel of the Nike Revolution 6. We know comfort is key to a successful run, so we made sure your steps are cushioned and flexible for a soft ride. It's an evolution of a favourite, with a breathable design made with at least 20% recycled content by weight.",
  } as Product,
};
