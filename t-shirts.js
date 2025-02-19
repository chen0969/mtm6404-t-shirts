const { useState } = React;
const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

const TShirtStore = () => {
  const [inventory, setInventory] = useState(tshirts);

  const selectBar = (index, value) => {
    setInventory((prevInventory) =>
      prevInventory.map((item, i) =>
        i === index ? { ...item, quantity: parseInt(value) } : item
      )
    );
  };

  const handleBuy = (index) => {
    setInventory((prevInventory) =>
      prevInventory.map((item, i) =>
        i === index ? { ...item, stock: item.stock - item.quantity } : item
      )
    );
  };

  return (
    <div className="container">
      <div className="row">
        {inventory.map((shirt, index) => (
          <div key={index} className="col-4 border p-4 rounded shadow-md">
            <img src={`images/` + shirt.image} alt={shirt.title} className="w-100" />
            <div className="row">
              <h3 className="text-lg font-semibold mt-2 col-8 fs-4">{shirt.title}</h3>
              <h3 className="text-gray-700 col-4 text-danger text-end">${shirt.price.toFixed(2)}</h3>
            </div>
            <p className="text-sm">Stock: {shirt.stock}</p>
            {shirt.stock > 0 ? (
              <div className="mt-2">
                <select
                  className="border p-1"
                  onChange={(e) => selectBar(index, e.target.value)}
                >
                  {[...Array(shirt.stock)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <button
                  className="btn btn-success px-4 py-1 ml-2 rounded"
                  data-amount={shirt.quantity}
                  onClick={() => handleBuy(index)}
                >
                  Buy
                </button>
              </div>
            ) : (
              <p className="text-red-500">Out of Stock</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// fin
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TShirtStore />);


/*
const getStockStatus = (stock, index) => {
  if (stock === 0) {
    return <p className="text-danger fw-bold">Out of Stock</p>;
  }

  return (
    <div className="input-group mb-3">
      <select className="form-select" id={`shirt-${index}`}>
        {[...Array(stock)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <button className="btn btn-primary">Buy</button>
    </div>
  );
};

const Shirts = ({ items }) => {
  return (
    <div className="shirts container">
      <div className="row">
        {items.map((shirt, index) => (
          <div key={index} className="shirt col-md-4">
            <img className="w-100 border border-info rounded" src={'images/' + shirt.image} alt={shirt.title} />
            
            <div className="row">
              <h4 className="col-8">{shirt.title}</h4>
              <h5 className="col-3 text-end text-danger fs-1">${shirt.price}</h5>
            </div>

            {getStockStatus(shirt.stock, index)}

            <p>Stock: {shirt.stock}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="row">
      <h1 className="col-12 text-center p-5">Get a T-shirt for you!</h1>
      <Shirts items={tshirts} />
      </div>
    </div>
  );
};
*/