import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  // console.log(fileName)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../furnitureData.json")
      .then((data) => setProducts(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
// object diye return korle nam same rakhte hobe , array diye korle jekono name call kora jabe
  return { products, loading, error };
};
export default useProducts;
