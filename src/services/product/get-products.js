import fetcher from 'utils/fetcher';

const getProducts = async ({
  limit = 10,
  page = 1,
  sort = 'default',
  shopId
}) => {
  const { data } = await fetcher.get(`/products`, {
    limit,
    page,
    sort,
    shopId
  });
  return data.products;
};

export default getProducts;
