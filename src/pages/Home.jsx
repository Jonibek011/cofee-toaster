import card4 from "../assets/home/desktop/image-danche.png";
import card1 from "../assets/home/desktop/image-gran-espresso.png";
import card3 from "../assets/home/desktop/image-piccollo.png";
import card2 from "../assets/home/desktop/image-planalto.png";

import coffeeIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import coffeeIcon2 from "../assets/home/desktop/icon-gift.svg";
import coffeeIcon3 from "../assets/home/desktop/icon-truck.svg";

//rrd
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home mt-[12vh]">
        <div className="custom-container  flex justify-center items-center">
          {/* <picture className="absolute left-[5%] right-[5%] top-0 z-0">
            <source
              className="rounded-3xl max-w-full h-auto"
              media="(max-width:640px)"
              srcSet="./image-hero-coffeepress-mobile.jpg"
            />
            <source
              className="rounded-3xl"
              media="(max-width:992px)"
              srcSet="./image-hero-coffeepress-tablet.jpg"
            />
            <img
              src="./image-hero-coffeepress.jpg"
              alt="Flowers"
              className="rounded-3xl"
            />
          </picture> */}
          <div className="main-image">
            <div className="main-info">
              <h1 className="text-white text-5xl md:text-7xl ">
                Great coffee <br /> made simple.
              </h1>
              <p className="text-[#83888F] md:w-[65%] lg:w-[50%]">
                Start yout morning with the world's best coffees. Try our
                expertly curated artisan coffees from out best roasters
                delivered directly to your door, at your schedule
              </p>
              <div>
                <Link
                  to="/plan"
                  className="px-8 hover:bg-[#0cd9d6] transition-colors duration-200 py-4 rounded-lg bg-[#0E8784] inline-block "
                >
                  <h4 className="text-white">Create your plan</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collection min-h-[70vh]  md:mt-32">
        <div className="custom-container relative ">
          <span className="our-collection ">our collection</span>
          {/* ============================ Card section ================================== */}
          <div className="card-section grid  grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 pt-40 md:pt-32 lg:pt-52 px-10 gap-12 md:gap-8">
            <div className="cards">
              <div className="card-image">
                <img src={card1} alt="" className="w-60" />
              </div>
              <div className="card-info text-center flex flex-col gap-10 lg:gap-5  md:w-[50%] lg:w-full">
                <h4>Gran espresso</h4>
                <p>
                  Light and flavorful blend with cocoa and black pepper for an
                  intense experience.
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card-image">
                <img src={card2} alt="" className="w-60" />
              </div>
              <div className="card-info text-center flex flex-col gap-10 lg:gap-5  md:w-[50%] lg:w-full">
                <h4>Planalto</h4>
                <p>
                  Brazilian dark roast with rich and velvety body, and hints of
                  fruits and nuts.
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card-image">
                <img src={card3} alt="" className="w-60" />
              </div>
              <div className="card-info text-center flex flex-col gap-10 lg:gap-5  md:w-[50%] lg:w-full">
                <h4>Piccollo</h4>
                <p>
                  Mild and smooth blend featuring notes of toasted almond and
                  dried cherry.
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card-image">
                <img src={card4} alt="" className="w-60" />
              </div>
              <div className="card-info text-center flex flex-col gap-10 lg:gap-5  md:w-[50%] lg:w-full">
                <h4>Danche</h4>
                <p>
                  Ethiopian hamd-harvested blend densely packed with vibrant
                  fruit notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="custom-container relative">
          <div className="absolute -z-10 w-[90%]  h-[220vh] md:h-[100vh] lg:h-[75vh] bg-[url('../bg-quality.png')] bg-cover bg-no-repeat bg-center rounded-2xl overflow-hidden">
            <span className="absolute md:hidden top-0 left-0 w-full h-[70vh] bg-[#2c323b]"></span>
          </div>
          <div>
            <h1 className="text-[45px] text-center text-white pt-20 md:pt-10 lg:pt-20">
              Why choose us?
            </h1>
            <p className="px-10 mt-10 text-center lg:w-[70%] lg:mx-auto ">
              <span className="text-slate-200 text-[25px]  leading-10 lg:leading-8 font-light">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                th best coffee growers to give you a more impactful experience
                on every level.
              </span>
            </p>
          </div>
          {/* ==================================card==================== */}
          <div className="second-card flex flex-col gap-10 md:gap-5 mt-28 md:mt-16 lg:flex-row lg:gap-5 lg:px-10">
            <div className="green-card ">
              <div className="crd-image flex justify-center items-center  w-full  h-[40%] md:h-auto md:w-[40%] ">
                <img
                  src={coffeeIcon}
                  alt=""
                  className="w-32 h-32 md:w-20 md:h-20 "
                />
              </div>
              <div>
                <h2 className="text-white text-[35px] lg:text-[25px]">
                  Best quality
                </h2>
                <p className="px-3 md:px-0 mt-16 md:mt-5">
                  <span className="text-white text-2xl leading-10 md:leading-5 lg:text-[16px]">
                    {" "}
                    Discover an endless variety of the world's best artisan
                    coffee from each of our roasters.
                  </span>
                </p>
              </div>
            </div>

            <div className="green-card ">
              <div className="crd-image flex justify-center items-center  w-full  h-[40%] md:h-auto md:w-[40%] ">
                <img
                  src={coffeeIcon2}
                  alt=""
                  className="w-32 h-32 md:w-20 md:h-20 "
                />
              </div>
              <div>
                <h2 className="text-white text-[35px] lg:text-[25px]">
                  Exclusive benefits
                </h2>
                <p className="px-3 md:px-0 mt-16 md:mt-5">
                  <span className="text-white text-2xl leading-10 md:leading-5 lg:text-[16px]">
                    {" "}
                    Special offers and swang when you subscribe, including 30%
                    off your first shipment
                  </span>
                </p>
              </div>
            </div>

            <div className="green-card ">
              <div className="crd-image flex justify-center items-center  w-full  h-[40%] md:h-auto md:w-[40%] ">
                <img
                  src={coffeeIcon3}
                  alt=""
                  className="w-32 h-32 md:w-20 md:h-20 "
                />
              </div>
              <div>
                <h2 className="text-white text-[35px] lg:text-[25px]">
                  Free shipping
                </h2>
                <p className="px-3 md:px-0 mt-16 md:mt-5">
                  <span className="text-white text-2xl leading-10 md:leading-5 lg:text-[16px]">
                    {" "}
                    We are the cost and coffee is delivered fast. Peak
                    freshness: guarenteed.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ NEW SECTION ============================ */}

      <section className="mt-48">
        <div className="custom-container flex flex-col gap-28 md:gap-40">
          <h1 className=" text-[40px] text-center md:text-start text-[#333D4B] opacity-60">
            How it works
          </h1>
          {/* =============================== Card 3 ========================== */}
          <div className="flex flex-col gap-16">
            <div className="relative flex flex-col gap-16 md:flex-row md:gap-5 lg:gap-28 ">
              <span className="absolute left-0 -top-20 bg-[#FDD6BA] w-[72%] xl:w-[75%] h-[2px] hidden md:flex justify-between">
                <div className="w-8 h-8 rounded-full relative -top-4 bg-white border-2 border-[#0E8784]"></div>
                <div className="w-8 h-8 rounded-full relative -top-4 bg-white border-2 border-[#0E8784]"></div>
                <div className="w-8 h-8 rounded-full relative -top-4 bg-white border-2 border-[#0E8784]"></div>
              </span>
              <div className="work-card flex flex-col gap-10 w-[90%] mx-auto text-center md:text-start">
                <h1 className="text-[100px]  md:text-[80px] font-[900] text-[#FDD6BA]">
                  01
                </h1>
                <h1 className="text-[40px]  md:text-[35px] text-[#333D4B] leading-[50px]">
                  Pick your <br /> coffee
                </h1>
                <p>
                  <span>
                    Select from our evolving range of artisan coffees. Our beans
                    are ethically sourced and we pay fair prices for them. there
                    are new cofees in all profiles every month for you to try
                    out.
                  </span>
                </p>
              </div>

              <div className="work-card flex flex-col  gap-10 w-[90%] mx-auto text-center md:text-start">
                <h1 className="text-[100px] md:text-[80px] font-[900] text-[#FDD6BA]">
                  02
                </h1>
                <h1 className="text-[40px] md:text-[35px] text-[#333D4B] leading-[50px]">
                  Choose the <br /> frequency
                </h1>
                <p>
                  <span>
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
                <h1 className="text-[40px]  md:text-[35px] text-[#333D4B] leading-[50px]">
                  Receive and <br /> enjoy!
                </h1>
                <p>
                  <span>
                    We ship your package whithin 48 hours, freshly roasted. Sit
                    back adn enjoy award-winning world-class coffees curated to
                    provide a distict tasting experience.
                  </span>
                </p>
              </div>
            </div>
            <Link
              to="/plan"
              className=" mx-auto md:mx-0 px-10 py-2 rounded-lg bg-[#0e8784] hover:bg-[#0cd9d6] transition-colors duration-200 text-white md:self-start"
            >
              <h2 className="text-[20px]">Create your plan</h2>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
