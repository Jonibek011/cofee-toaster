import commitment from "../assets/about/desktop/image-commitment.jpg";
import commitment2 from "../assets/about/tablet/image-commitment.jpg";
import commitment3 from "../assets/about/mobile/image-commitment.jpg";

import Quality from "../assets/about/desktop/image-quality.jpg";
import Quality2 from "../assets/about/tablet/image-quality.jpg";
import Quality3 from "../assets/about/mobile/image-quality.jpg";

import australia from "../assets/about/desktop/illustration-australia.svg";
import canada from "../assets/about/desktop/illustration-canada.svg";
import uk from "../assets/about/desktop/illustration-uk.svg";

function About() {
  return (
    <section className="about mt-[8vh] md:mt-[12vh]">
      <div className="custom-container">
        <div
          className={`bg-[url('../image-hero-whitecup.jpg')] md:bg-[url('../image-hero-whitecup-tablet.jpg')]  lg:bg-[url('../image-hero-whitecup-desktop.jpg')] p-5  md:p-16 lg:p-20  w-full h-[80vh] md:h-[57vh] lg:h-[60vh] bg-cover bg-center bg-no-repeat rounded-3xl lg:rounded-xl flex flex-col justify-center items-center md:items-start gap-10`}
        >
          <h1 className="text-white font-bold text-5xl md:text-4xl lg:text-[44px] lg:font-extrabold">
            About Us
          </h1>
          <p className="text-white text-center md:text-start text-2xl md:text-[15px] lg:text-lg font-light leading-10 md:leading-7 md:w-[70%] lg:w-[45%]">
            Coffeerousters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup-from bean to brew-in every
            shipment.
          </p>
        </div>
      </div>
      <div className="custom-container mt-40 flex flex-col md:flex-row gap-28 md:gap-10 lg:items-center">
        <div className="md:w-[45%] lg:w-[50%] flex justify-center items-center">
          <picture className="">
            <source
              className="rounded-3xl max-w-full h-auto"
              media="(max-width:767px)"
              srcSet={commitment3}
            />
            <source
              className="rounded-3xl"
              media="(max-width:992px)"
              srcSet={commitment2}
            />
            <img src={commitment} alt="Flowers" className="rounded-3xl" />
          </picture>
        </div>
        <div className="flex flex-col gap-20 md:gap-5 md:w-[55%] lg:w-[50%]">
          <h1 className="text-5xl md:text-4xl  text-center md:text-start font-extrabold md:mt-5 text-[#333D4B] lg:mt-0">
            Our commitment
          </h1>
          <p className="text-xl leading-8 text-center md:text-[16px] md:leading-6 md:text-start">
            We're built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            woeld's best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinvtive to their native growing region.
          </p>
        </div>
      </div>
      <div className="custom-container mt-64">
        <div className="rounded-xl lg:flex lg:px-10 lg:items-center h-[85vh] bg-[url('./assets/about/mobile/bg-quality.png')] md:bg-[url('./bg-quality.png')] lg:bg-[url('./assets/about/desktop/bg-quality.png')] bg-cover bg-center bg-no-repeat">
          <div className=" relative flex flex-col justify-center items-center  translate-y-[-50%] lg:translate-y-[-35%] lg:flex-none lg:order-2 ">
            <picture className=" w-[85%] ">
              <source
                className="rounded-xl max-w-full w-full h-full mx-auto "
                media="(max-width:767px)"
                srcSet={Quality3}
              />
              <source
                className="rounded-xl max-w-full w-full h-full mx-auto "
                media="(max-width:992px)"
                srcSet={Quality2}
              />
              <img
                src={Quality}
                alt="Flowers"
                className="rounded-xl w-full h-full lg:w-auto lg:h-auto  "
              />
            </picture>
          </div>
          <div className="px-10   -mt-10 flex flex-col gap-5 md:-mt-28 md:px-16 lg:mt-0 lg:order-1 ">
            <h1 className="text-white text-4xl text-center lg:text-start">
              Uncompromising quality
            </h1>
            <p className="text-center text-gray-300 lg:text-start lg:w-[80%]">
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the cofee dry. Every bag of coffee is tagged with a roast date and
              batch number. Our goals is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================
       */}
      <section className="headquarters mt-40">
        <div className="custom-container flex flex-col gap-16 ">
          <h1 className="text-[27px] opacity-50 text-center md:text-start">
            Our headquarters
          </h1>
          <div className="about-card grid md:grid-rows-1 md:grid-cols-3 gid-rows-3 grid-cols-1 gap-16 md:gap-20 ">
            <div className="sub-card flex  flex-col items-center md:items-start  gap-8 ">
              <img src={uk} alt="" className="w-12" />
              <div className="flex flex-col gap-1 ">
                <h1 className="text-center md:text-start lg:text-[33px] font-extrabold md:text-[22px] text-[35px]">
                  United Kingdom
                </h1>
                <div className="p-body font-light text-gray-500 text-center md:text-start">
                  <p>68 Asfordby RD</p>
                  <p>Alcaston</p>
                  <p>SY6 1YA</p>
                  <p>+998 91 699 94 98</p>
                </div>
              </div>
            </div>

            <div className="sub-card flex  flex-col items-center md:items-start  gap-8 ">
              <img src={uk} alt="" className="w-12" />
              <div className="flex flex-col gap-1 ">
                <h1 className="text-center md:text-start lg:text-[33px] font-extrabold md:text-[22px] text-[35px]">
                  United Kingdom
                </h1>
                <div className="p-body font-light text-gray-500 text-center md:text-start">
                  <p>68 Asfordby RD</p>
                  <p>Alcaston</p>
                  <p>SY6 1YA</p>
                  <p>+998 91 699 94 98</p>
                </div>
              </div>
            </div>

            <div className="sub-card flex  flex-col items-center md:items-start  gap-8 ">
              <img src={uk} alt="" className="w-12" />
              <div className="flex flex-col gap-1 ">
                <h1 className="text-center md:text-start lg:text-[33px] font-extrabold md:text-[22px] text-[35px]">
                  United Kingdom
                </h1>
                <div className="p-body font-light text-gray-500 text-center md:text-start">
                  <p>68 Asfordby RD</p>
                  <p>Alcaston</p>
                  <p>SY6 1YA</p>
                  <p>+998 91 699 94 98</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
