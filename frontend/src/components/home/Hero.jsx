import React from "react";

const Hero = () => {
  return (
    <section className="bg-white pb-[140px] pt-20">
      <div className="container grid grid-cols-2 gap-[60px]">
        <div className="flex flex-col justify-center">
          <h2 className="text-[64px] font-extrabold leading-[77px]">
            Get yummy pizza in <span className="text-primary">30 min</span>
          </h2>
          <p className="text-[30px] mt-5">
            No need to pay if, order took <br />
            more that 30 min
          </p>
          <div>
            <button className="text-[20px] font-bold text-white flex items-center gap-4 bg-primary px-[30px] py-5 rounded-[20px] mt-8 border border-transparent transition-all hover:border-primary hover:bg-transparent hover:text-primary button">
              <span>Order Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                viewBox="0 0 37 24"
                fill="none"
                className="button-icon"
              >
                <path
                  d="M36.0607 13.0607C36.6464 12.4749 36.6464 11.5251 36.0607 10.9393L26.5147 1.3934C25.9289 0.807611 24.9792 0.807611 24.3934 1.3934C23.8076 1.97919 23.8076 2.92893 24.3934 3.51472L32.8787 12L24.3934 20.4853C23.8076 21.0711 23.8076 22.0208 24.3934 22.6066C24.9792 23.1924 25.9289 23.1924 26.5147 22.6066L36.0607 13.0607ZM0 13.5H35V10.5H0V13.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-full"
            src="/images/hero-image.png"
            alt="hero banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
