import React from "react";
import Navbar from "../components/Navbar";
import Solution from "../components/solution";
import SSection from "../components/scapay-section";
import JoinUs from "../components/join-us";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";

import img1 from "../assets/2.png";
import img2 from "../assets/4.png";
import img3 from "../assets/3.png";
import img5 from "../assets/5.png";
import img10 from "../assets/10.png";
import img6 from "../assets/6.png";
import img9 from "../assets/9.png";
import img7 from "../assets/7.png";

const HomePage = () => {
  return (
    <div className="wrapper ">
      <header className="bg-headercolor ">
        <div className="content mx-8 md:w-4/5 md:mx-auto ">
          <Navbar />

          <div className="grid grid-cols-1 md:grid-cols-2 pt-20 ">
            <div>
              <h1 className="text-xl md:text-5xl text-secondary3">A crypto currency</h1>
              <h1 className="text-4xl md:text-8xl pt-4 text-primary font-bold">
                liquidity
              </h1>
              <h1 className="text-4xl md:text-8xl pt-4  text-primary font-bold">
                Solution
              </h1>
              <p className="text-secondary3 text-md md:text-xl  pt-6">
                Spend crypto anyhow
               <span className="pl-1"> <i class="fa-solid  text-secondary fa-exclamation"></i></span>
              </p>
            </div>
            <div className="img  hidden md:block ">
              {/* <img src={img1} alt="" className="object-contain h-40" /> */}
              <img src={img2} alt="" className="object-contain h-80 absolute" />
            </div>
          </div>
          <div className="btns pt-16 md:flex pb-10">
            <div>
              <Button styles="bg-primary text-white ">
                create a free account
              </Button>
            </div>
            <div className="md:pl-10 pt-10 md:pt-0">
              <Button styles="bg-secondary2 text-primary">Learn more</Button>
            </div>
          </div>
        </div>
      </header>
      <section className="py-20 mx-8 md:w-4/5 md:mx-auto ">
        <h1 className="text-4xl pt-4  text-primary font-extrabold">
          Our Solution
        </h1>
        <div className="bg-white rounded-xl shadow-xl py-8 mt-10 px-10">
          <div className="md:flex justify-between">
            <Solution text="Investment" icon="fa-solid fa-wallet" />
            <Solution text="Liquidity for customers" icon="fa-solid fa-users" />
            <Solution
              text="Recieve payments from anywhere"
              icon="fa-solid fa-location-dot"
            />
            <Solution text="Swapping tokens" icon="fa-solid fa-dollar-sign" />
          </div>
        </div>
      </section>

      <div className="mx-8 md:w-3/4 md:mx-auto py-16">
        <SSection
          styles="order-2"
          imgW="lg:w-5/6"
          orderText="order-2"
          orderImg="order-1"
          title="Investment"
          img={img10}
        >
          As a business you can choose to invest your coins for even more profit
        </SSection>
        <SSection
          title="Liquidity"
          orderText="order-1"
          imgW="lg:w-1/4"
          orderImg="order-2"
          span="for customers"
          img={img6}
        >
          You can now spend your stable coins to purchase anything on any
          platform where our api has been integrated as a payment gateway.
        </SSection>
        <SSection
          imgW="lg:w-1/4"
          orderText="order-2"
          orderImg="order-1"
          title="Recieve payments"
          span=" from anywere"
          img={img9}
        >Businesses can receive payments from anywhere in the world either in stable crypto tokens or fiat, it is totally up to you.</SSection>
        <SSection
          imgW="lg:w-1/4"
          orderText="order-1"
          orderImg="order-2"
          title="Swapping "
          span="tokens"
          img={img7}
        >Swap your tokens for others either mid-purchase or any other time.</SSection>
        <JoinUs />
      </div>
    </div>
  );
};

export default HomePage;
