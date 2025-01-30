import main from "../assets/plan/desktop/image-hero-blackcup.jpg";
import main2 from "../assets/plan/tablet/image-hero-blackcup.jpg";
import main3 from "../assets/plan/mobile/image-hero-blackcup.jpg";

//react hot toast
import toast from "react-hot-toast";
//arrow icons
import arrow from "../assets/plan/desktop/icon-arrow.svg";

//context
import { useEffect, useState } from "react";

// import deliverBg from "../assets/plan/desktop/bg-order-summary.png";
// import deliverBgMobile from "../assets/plan/mobile/bg-order-summary.png";

function Plan() {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardId2, setSelectedCardId2] = useState(null);
  const [selectedCardId3, setSelectedCardId3] = useState(null);
  const [selectedCardId4, setSelectedCardId4] = useState(null);
  const [selectedCardId5, setSelectedCardId5] = useState(null);
  const [letter1, setLetter1] = useState("-----");

  const [openModal, setOpenModal] = useState(false);

  const [letter2, setLetter2] = useState("-----");
  const [letter3, setLetter3] = useState("-----");
  const [letter4, setLetter4] = useState("-----");
  const [letter5, setLetter5] = useState("-----");

  const card1 = [
    {
      id: 1,
      title: "Capsule",
      description: "Compatible with nespresso systems and similar brewers",
    },
    {
      id: 2,
      title: "Filter",
      description:
        "Fot pour over or drip methods like Aeropress, Chemex, and V60",
    },
    {
      id: 3,
      title: "Espresso",
      description:
        "Dense and finally group beans for an intense, flavorful experience",
    },
  ];
  const card2 = [
    {
      id: 1,
      title: "Single Origin",
      description:
        "Distinct, hight quality coffee from a specific family-owned farm",
    },
    {
      id: 2,
      title: "Decaf",
      description:
        "Just like regular coffee, except the coffeine has been removed",
    },
    {
      id: 3,
      title: "Blended",
      description:
        "Combination of two or three dark roasted beans of organic cofees",
    },
  ];

  const card3 = [
    {
      id: 1,
      title: "250g",
      description:
        "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },
    {
      id: 2,
      title: "500g",
      description:
        "Perfect option for a couple. Yeald about 40 delectable cups",
    },
    {
      id: 3,
      title: "1000g",
      description:
        "Perfect for offices and events. Yields about 90 delightful cups",
    },
  ];

  const card4 = [
    {
      id: 1,
      title: "Wholebean",
      description: "Best choice if you cherish the full sensory experience",
    },
    {
      id: 2,
      title: "Filter",
      description:
        "For drip or pour-over coffee methods such as V60 or Aeropress",
    },
    {
      id: 3,
      title: "Caferiere",
      description:
        "Course ground beans specially suited for french press coffee",
    },
  ];

  const card5 = [
    {
      id: 1,
      title: "Every week",
      description: "$7.20 per shipment. Includes free first-class shipping",
    },
    {
      id: 2,
      title: "Every 2 weeks",
      description: "$9.60 per shipment. Includes free priority shipping",
    },
    {
      id: 3,
      title: "Every month",
      description: "$12.00 per shipment. Includes free priority shipping",
    },
  ];

  const AddItem = (id) => {
    setSelectedCardId(id);
    const modal1 = card1.find((car) => {
      return car.id == id;
    });
    setLetter1(modal1 ? modal1.title : "");
  };

  const AddItem2 = (id, card) => {
    setSelectedCardId2(id);
    const modal1 = card2.find((car) => {
      return car.id == id;
    });
    setLetter2(modal1.title);
    card.style.backgroundColor = "green";
  };

  const AddItem3 = (id) => {
    setSelectedCardId3(id);
    const modal1 = card3.find((car) => {
      return car.id == id;
    });
    setLetter3(modal1.title);
  };

  const AddItem4 = (id) => {
    setSelectedCardId4(id);
    const modal1 = card4.find((car) => {
      return car.id == id;
    });
    setLetter4(modal1.title);
  };

  const AddItem5 = (id) => {
    setSelectedCardId5(id);
    const modal1 = card5.find((car) => {
      return car.id == id;
    });
    setLetter5(modal1.title);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    toast.success("Your request has been accepted!");
  };
  return (
    <>
      <section className="plan-main mt-[8vh] md:mt-[12vh] flex flex-col gap-48 lg:gap-28  relative">
        <div className="custom-container  min-h-[60vh]  flex ">
          {/* ========================== Main ======================================================== */}
          <div className=" main h-full relative gap-16 lg:gap-8 py-20 px-5 md:px-16 flex flex-col justify-center items-center md:items-start mx-auto ">
            <picture className="absolute left-0 top-0 w-full h-auto  max-h-[60vh]  mx-auto -z-10 ">
              <source
                className="rounded-3xl max-w-full  max-h-[60vh]"
                media="(max-width:767px)"
                srcSet={main3}
              />
              <source
                className="rounded-3xl"
                media="(max-width:992px)"
                srcSet={main2}
              />
              <img src={main} alt="Flowers" className="rounded-xl" />
            </picture>
            <h1 className="text-center md:text-start text-4xl md:text-7xl text-white font-extrabold">
              Create a plan
            </h1>
            <p className="text-gray-400 text-center md:text-start md:w-[70%] lg:w-[40%] text-lg lg:text-[16px] lg:leading-6 leading-8 ">
              Build a subscription plan that best fits your needs. We offer an
              assortment of the best artisan coffees from around the globe
              delivered fresh to your door.
            </p>
          </div>
        </div>

        {/* ================================================ */}
        <div className=" px-0 lg:px-[5%]  md:mt-0 max-w-[1340px] mx-auto">
          <div className="bg-[url('../bg-steps-mobile.png')] md:bg-[url('../bg-steps.png')] pt-20 md:pt-48 lg:px-20 md:px-5 pb-20 rounded-md lg:rounded-3xl bg-no-repeat bg-cover bg-center">
            {/* =============================== Card 3 ========================== */}
            <div className="flex flex-col gap-16">
              <div className="relative flex flex-col gap-16 md:flex-row md:gap-5 lg:gap-28 ">
                <span className="absolute left-0 -top-20 bg-[#FDD6BA] w-[72%] xl:w-[75%] h-[2px] hidden md:flex justify-between">
                  <div className="w-8 h-8 rounded-full relative -left-4 -top-4 bg-transparent border-2 border-[#0E8784]"></div>
                  <div className="w-8 h-8 rounded-full relative -top-4 bg-transparent border-2 border-[#0E8784]"></div>
                  <div className="w-8 h-8 rounded-full relative -right-4 -top-4 bg-transparent border-2 border-[#0E8784]"></div>
                </span>
                <div className="work-card flex flex-col gap-10 w-[90%] mx-auto text-center md:text-start">
                  <h1 className="text-[100px]  md:text-[80px] font-[900] text-[#FDD6BA]">
                    01
                  </h1>
                  <h1 className="text-[40px]  md:text-[35px] text-white leading-[50px]">
                    Pick your <br /> coffee
                  </h1>
                  <p>
                    <span className="text-gray-400">
                      Select from our evolving range of artisan coffees. Our
                      beans are ethically sourced and we pay fair prices for
                      them. there are new cofees in all profiles every month for
                      you to try out.
                    </span>
                  </p>
                </div>

                <div className="work-card flex flex-col  gap-10 w-[90%] mx-auto text-center md:text-start">
                  <h1 className="text-[100px] md:text-[80px] font-[900] text-[#FDD6BA]">
                    02
                  </h1>
                  <h1 className="text-[40px] md:text-[35px] text-white leading-[50px]">
                    Choose the <br /> frequency
                  </h1>
                  <p>
                    <span className="text-gray-400">
                      Customize your order frequency, quantity, even your roast
                      stylr and grind type. Pouse, skip or cancel your
                      subscription with no commitment through our online portal.
                    </span>
                  </p>
                </div>

                <div className="work-card flex flex-col gap-10 w-[90%] mx-auto text-center md:text-start">
                  <h1 className="text-[100px]  md:text-[80px] font-[900] text-[#FDD6BA]">
                    03
                  </h1>
                  <h1 className="text-[40px]  md:text-[35px] text-white leading-[50px]">
                    Receive and <br /> enjoy!
                  </h1>
                  <p>
                    <span className="text-gray-400">
                      We ship your package whithin 48 hours, freshly roasted.
                      Sit back adn enjoy award-winning world-class coffees
                      curated to provide a distict tasting experience.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================================== */}
        <div className="custom-container">
          <div className="coffee-choose-section w-full h-full flex gap-10 ">
            <div className="hidden lg:flex flex-col gap-2 w-[30%] pe-10 ">
              <div className="item group border-b-2 border-gray-300 cursor-pointer px-4 py-3 w-full">
                <h1 className="flex gap-4 leading-5 text-2xl opacity-40 group-hover:opacity-70 transition-all duration-200 font-[900]">
                  <span className="group-active:text-[#0E8784]">01</span>{" "}
                  <span className="text-[#333D4B]">Preferences</span>
                </h1>
              </div>

              <div className="item group border-b-2 border-gray-300 cursor-pointer px-4 py-3 w-full">
                <h1 className="flex gap-4 leading-5 text-2xl opacity-40 group-hover:opacity-70 transition-all duration-200 font-[900]">
                  <span className="group-active:text-[#0E8784]">02</span>{" "}
                  <span className="text-[#333D4B]">Bean Type</span>
                </h1>
              </div>

              <div className="item group border-b-2 border-gray-300 cursor-pointer px-4 py-3 w-full">
                <h1 className="flex gap-4 leading-5 text-2xl opacity-40 group-hover:opacity-70 transition-all font-[900]">
                  <span className="group-active:text-[#0E8784]">03</span>{" "}
                  <span className="text-[#333D4B]">Quantity</span>
                </h1>
              </div>

              <div className="item group border-b-2 border-gray-300 cursor-pointer px-4 py-3 w-full">
                <h1 className="flex gap-4 leading-5 text-2xl opacity-40 group-hover:opacity-70 transition-all font-[900]">
                  <span className="group-active:text-[#0E8784]">04</span>{" "}
                  <span className="text-[#333D4B]">Grid Option</span>
                </h1>
              </div>

              <div className="item group  cursor-pointer px-4 py-3 w-full">
                <h1 className="flex gap-4 leading-5 text-2xl opacity-40 group-hover:opacity-70 transition-all font-[900]">
                  <span className="group-active:text-[#0E8784]">05</span>{" "}
                  <span className="text-[#333D4B]">Deliveries</span>
                </h1>
              </div>
            </div>
            {/* ==================================================== */}
            <div className="w-full lg:w-[70%] flex flex-col gap-16 px-8">
              <div className="collapse ">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title  ">
                  <h1 className="text-xl md:text-3xl cursor-poiner font-extrabold flex items-center justify-between mb-8">
                    <span className="opacity-70">
                      How do you drink your coffee?{" "}
                    </span>
                    <span>
                      <img src={arrow} alt="" className="w-6 h-4" />
                    </span>
                  </h1>
                </div>
                <div className="collapse-content">
                  <div className="dropdown-container  flex flex-col lg:flex-row gap-5">
                    {card1.map((card) => {
                      const isSelected = selectedCardId === card.id;
                      return (
                        <div
                          onClick={() => AddItem(card.id)}
                          className={`card p-8 flex flex-col gap-8 justify-center  ${
                            !isSelected && "hover:bg-[#FDD6BA]"
                          } rounded-xl transition-all duration-200 group ${
                            isSelected
                              ? "bg-[#0E8784] hover:bg-[#0E8784] text-white"
                              : "bg-[#f4f4f2] "
                          }`}
                        >
                          <h1 className="text-xl group-active:text-white">
                            {card.title}
                          </h1>
                          <p className="group-active:text-white">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="collapse ">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title  ">
                  <h1 className="text-xl md:text-3xl font-extrabold flex items-center justify-between mb-8">
                    <span className="opacity-70">What type of coffee? </span>
                    <span>
                      <img src={arrow} alt="" className="w-6 h-4" />
                    </span>
                  </h1>
                </div>
                <div className="collapse-content">
                  <div className="dropdown-container flex flex-col lg:flex-row gap-5">
                    {card2.map((card) => {
                      const isSelected = selectedCardId2 === card.id;
                      return (
                        <div
                          onClick={() => AddItem2(card.id, card)}
                          className={`card p-8 flex flex-col gap-8 justify-center   ${
                            !isSelected && "hover:bg-[#FDD6BA]"
                          }  rounded-xl transition-all duration-200 group ${
                            isSelected
                              ? "bg-[#0E8784] hover:bg-[#0E8784] text-white"
                              : "bg-[#f4f4f2] "
                          }`}
                        >
                          <h1 className="text-xl group-active:text-white">
                            {card.title}
                          </h1>
                          <p className="group-active:text-white">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="collapse ">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title  ">
                  <h1 className="text-xl md:text-3xl font-extrabold flex items-center justify-between mb-8">
                    <span className="opacity-70">
                      How much would you like?{" "}
                    </span>
                    <span>
                      <img src={arrow} alt="" className="w-6 h-4" />
                    </span>
                  </h1>
                </div>
                <div className="collapse-content">
                  <div className="dropdown-container flex flex-col lg:flex-row gap-5">
                    {card3.map((card) => {
                      const isSelected = selectedCardId3 == card.id;
                      return (
                        <div
                          onClick={() => AddItem3(card.id)}
                          className={`card p-8 flex flex-col gap-8 justify-center   ${
                            !isSelected && "hover:bg-[#FDD6BA]"
                          }  rounded-xl transition-all duration-200 group ${
                            isSelected
                              ? "bg-[#0E8784] hover:bg-[#0E8784] text-white"
                              : "bg-[#f4f4f2] "
                          }`}
                        >
                          <h1 className="text-xl group-active:text-white">
                            {card.title}
                          </h1>
                          <p className="group-active:text-white">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="collapse ">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title  ">
                  <h1 className="text-xl md:text-3xl font-extrabold flex items-center justify-between mb-8">
                    <span className="opacity-70">Want us to grind them? </span>
                    <span>
                      <img src={arrow} alt="" className="w-6 h-4" />
                    </span>
                  </h1>
                </div>
                <div className="collapse-content">
                  <div className="dropdown-container flex flex-col lg:flex-row gap-5">
                    {card4.map((card) => {
                      const isSelected = selectedCardId4 == card.id;
                      return (
                        <div
                          onClick={() => AddItem4(card.id)}
                          className={`card p-8 flex flex-col gap-8 justify-center   ${
                            !isSelected && "hover:bg-[#FDD6BA]"
                          }  rounded-xl transition-all duration-200 group ${
                            isSelected
                              ? "bg-[#0E8784] hover:bg-[#0E8784] text-white"
                              : "bg-[#f4f4f2] "
                          }`}
                        >
                          <h1 className="text-xl group-active:text-white">
                            {card.title}
                          </h1>
                          <p className="group-active:text-white">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="collapse ">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title  ">
                  <h1 className="text-xl md:text-3xl font-extrabold flex items-center justify-between mb-8">
                    <span className="opacity-70">
                      How often should we deliver?{" "}
                    </span>
                    <span>
                      <img src={arrow} alt="" className="w-6 h-4" />
                    </span>
                  </h1>
                </div>
                <div className="collapse-content">
                  <div className="dropdown-container flex flex-col lg:flex-row gap-5">
                    {card5.map((card) => {
                      const isSelected = selectedCardId5 == card.id;
                      return (
                        <div
                          onClick={() => AddItem5(card.id)}
                          className={`card p-8 flex flex-col gap-8 justify-center   ${
                            !isSelected && "hover:bg-[#FDD6BA]"
                          }  rounded-xl transition-all duration-200 group ${
                            isSelected
                              ? "bg-[#0E8784] hover:bg-[#0E8784] text-white"
                              : "bg-[#f4f4f2] "
                          }`}
                        >
                          <h1 className="text-xl group-active:text-white">
                            {card.title}
                          </h1>
                          <p className="group-active:text-white">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="deliver-card relative flex flex-col gap-10">
                <div className="deliver-main px-10 lg:px-20 py-3 lg:py-8 flex flex-col gap-3 relative bg-[url('../bg-order-summary.mobile.png')] md:bg-[url('../bg-order-summary.png')] rounded-3xl bg-center bg-cover bg-no-repeat">
                  <p className="text-gray-500 font-light"> ORDER SUMMARY</p>
                  <h1 className="text-white text-xl md:text-2xl leading-10 summary-title">
                    "I drink my coffee as <span>{letter1}</span>, whith a{" "}
                    <span>{letter2}</span> type of bean. <span>{letter3}</span>{" "}
                    graund ala <span>{letter4}</span>, sent to me{" "}
                    <span>{letter5}</span>
                  </h1>
                </div>
                <button
                  onClick={handleOpenModal}
                  className="px-8 hover:bg-[#0cd9d6] transition-colors duration-200 py-4 rounded-lg bg-[#0E8784] inline-block mx-auto lg:mx-0 lg:self-end"
                >
                  <h4 className="text-white">Create my plan</h4>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =================================== MODAL ================================== */}
        {openModal && (
          <div className=" z-50 fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-50 flex justify-center items-center ">
            <div className="modal-card absolute  left-[7%] right-[7%] md:static rounded-xl overflow-hidden mx-auto max-w-[500px]  bg-white bg-opacity-100">
              <h1 className=" text-2xl  md:text-4xl text-center text-white bg-[#333D4B] p-8">
                Order summary
              </h1>
              <div className="p-10 flex flex-col gap-10">
                <h1 className="text-[#83888F] text-xl md:text-2xl leading-10 summary-title">
                  "I drink my coffee as <span>{letter1}</span>, whith a{" "}
                  <span>{letter2}</span> type of bean. <span>{letter3}</span>{" "}
                  graund ala <span>{letter4}</span>, sent to me{" "}
                  <span>{letter5}</span>
                </h1>

                <p>
                  Is this correct? You can proceed to checkout or go back to
                  plan section if something is off. Subscription discount codes
                  can also be redeemed at the checkout.
                </p>

                <div className="flex items-center gap-3">
                  <h1 className="text-3xl hidden md:block">$14.00/mo </h1>
                  <button
                    onClick={handleCloseModal}
                    className="px-8 hover:bg-[#0cd9d6] transition-colors duration-200 py-4 rounded-lg bg-[#0E8784] inline-block mx-auto lg:mx-0 lg:self-end"
                  >
                    <h4 className="text-white">
                      Checkout{" "}
                      <h1 className="text-2xl inline-block md:hidden">
                        - $14.00/mo{" "}
                      </h1>{" "}
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Plan;
