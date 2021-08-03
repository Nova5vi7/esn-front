import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import getProducts from 'services/product/get-products';

const ProductsPageContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoadingStatus] = useState(false);

  const fetchProducts = async ({ limit, page, sort }) => {
    const fetched = await getProducts({ limit, page, sort });
    console.log('fetched', fetched);
    setProducts([...fetched.rows]);
  };

  const handleChangePage = page => {
    setPage(page);
  };

  useEffect(() => {
    fetchProducts({ limit: 2, page, sort: 'older' });
  }, [page]);

  return (
    <div>
      {products.map(prod => {
        console.log(prod);
        return <div key={prod.id}>{prod.name}</div>;
      })}
      {Array.from(Array(10)).map((_itm, index) => {
        const page = index + 1;
        return (
          <button key={page} onClick={() => handleChangePage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default ProductsPageContainer;
