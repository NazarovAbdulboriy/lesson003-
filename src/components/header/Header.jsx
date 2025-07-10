import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cards, setCards] = useState([]);

  const inc = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { id, name, age, imageUrl };
    setCards([...cards, newCard]);

    setId("");
    setName("");
    setAge("");
    setImageUrl("");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Header {count}</h2>

      <button
        className="bg-gray-500 disabled:bg-gray-300 px-4 py-2 mr-2 rounded text-white"
        disabled={count >= 10}
        onClick={inc}
      >
        Increment
      </button>

      <button
        className="bg-gray-500 disabled:bg-gray-300 px-4 py-2 rounded text-white"
        disabled={count <= 0}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <div className="text-center my-6">
        <button
          className="bg-red-600 w-[150px] h-[50px] text-white rounded-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Input" : "Open Input"}
        </button>
      </div>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md mx-auto mb-10"
        >
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}

      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-64 border p-6 rounded shadow-md flex flex-col items-center"
          >
            <img
              src={card.imageUrl}
              alt={card.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <p>
              <strong>ID:</strong> {card.id}
            </p>
            <p>
              <strong>Name:</strong> {card.name}
            </p>
            <p>
              <strong>Age:</strong> {card.age}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
