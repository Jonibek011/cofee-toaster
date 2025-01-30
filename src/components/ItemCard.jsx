import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/GlobalContext";

function ItemCard({ card, cards }) {
  const { dispatch } = useContext(MainContext);

  const findCardItem = (id) => {
    const item = cards.filter((car) => {
      return car.id == id;
    });

    dispatch({ type: "CARD1", payload: item });
  };
  return (
    <div
      onClick={() => findCardItem(card.id)}
      className="card p-8 flex flex-col gap-8 justify-center bg-[#f4f4f2] hover:bg-[#FDD6BA] active:bg-[#0E8784] rounded-xl transition-all duration-200 group"
    >
      <h1 className="text-xl group-active:text-white">{card.title}</h1>
      <p className="group-active:text-white">{card.description}</p>
    </div>
  );
}

export default ItemCard;
