import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000, quantity: 5 },
  { id: 2, name: "Smartphone", price: 600, quantity: 8 },
  { id: 3, name: "Tablet", price: 400, quantity: 10 },
];

export default function MemoUseCase() {
  const [discount, setDiscount] = useState(0);

  const totalValue = useMemo(
    () =>
      products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
    []
  );
  const discountedValue = totalValue - (totalValue * discount) / 100;

  return (
    <div>
      <h2>Inventory value</h2>
      <p>Total value with discount: {discountedValue.toFixed(2)}</p>
      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Discount %"
      />
    </div>
  );
}
