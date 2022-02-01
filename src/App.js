import { useEffect, useState } from "react";
import StoreItem from "./components/StoreItem";

function App() {
  const [store, setStore] = useState([]);

  const getAndSetStore = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const store = await res.json();
    setStore(store);
  };

  useEffect(() => {
    getAndSetStore();
  }, []);

  return (
    <div className="antialiased text-gray-900">
      <div className="flex flex-col items-center">
        {store &&
          store.map((item) => (
            <StoreItem
              key={+item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating.rate}
              votes={item.rating.count}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
