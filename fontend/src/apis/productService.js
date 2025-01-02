import axiosClient from './axiosCline';

const getProduct = async () => {
  const product = await axiosClient.get('/product');

  console.log(product);
  return product.data;
};

export { getProduct };
