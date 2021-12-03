import { useEffect, useState } from 'react';
import ProductCard from './components/Card';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/leilao")
      .then((response) => response.json())
      .then((products) => {
        setIsLoading(false);
        setProducts(products);
      });
  },[]);

  return (
    <div>
      <h1>Leilão de Centavos</h1>

      {isLoading ? (
        <p>Carregando</p>
      ) : (
        <div style={{ width: "18rem" }}>
          {products.map(({ _id, name, image, bid }) => (
            <ProductCard
              key={_id}
              id={_id}
              name={name}
              image={image}
              bids={bid}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
