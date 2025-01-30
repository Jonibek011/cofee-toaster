import React from "react";

function drop() {
  return (
    <div>
      <div className="collapse ">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title  ">
          <h1 className="text-3xl font-extrabold flex items-center justify-between mb-8">
            <span className="opacity-70">How often should we deliver? </span>
            <span>
              <img src={arrow} alt="" />
            </span>
          </h1>
        </div>
        <div className="collapse-content">
          <div className="dropdown-container flex flex-col lg:flex-row gap-5">
            {card5.map((card) => {
              return <ItemCard card={card} key={card.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default drop;
