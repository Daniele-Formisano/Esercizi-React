import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  age: "",
  address: "",
};

export default function MultipleForm() {
  const [formData, setFormData] = useState(initialForm);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Dati inseriti: ${JSON.stringify(formData, null, 2)}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Scrivi il tuo nome"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Scrivi la tua email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={formData.afe}
        placeholder="Scrivi la tua età"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        placeholder="Scrivi il tuo indirizzo"
        onChange={handleChange}
      />
      <button type="submit">Invio</button>
    </form>
  );
}
