import React from "react";
import Navbar from "./Navbar";
import { FaWarehouse, FaSortAmountUpAlt } from "react-icons/fa";
import heroImg from "../images/ANTENNA 5G.webp";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillTool } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="Hero mb-5">
      <Navbar />
      <div className="d-flex flex-column justify-items-center heroMain">
        <div className="d-flex align-items-center canvas herofirst">
          <div className="content w-50 text-white">
            <h1 className="fw-bold main_heading">
              Amianto addio! Il tuo tetto nuovo gratis con il nostro
              fotovoltaico
            </h1>
            <p className="fs-5 mt-2">
              Rimuoviamo l’amianto e realizziamo una nuova copertura a nostro
              costo. Tutto completamente gratis, in cambio dell’uso del tuo
              lastrico solare.
            </p>
            <button className="btn primary_btn px-3 mt-3 py-2">
              Find out how it works
            </button>
          </div>
          <div className="heroimg w-50 ms-4 d-flex">
            <img src={heroImg} alt="img" className="h-100 w-100 rounded" />
          </div>
        </div>

        <div className="grid canvas pb-5">
          <div className="text-center">
            <BsFillCheckCircleFill size={50} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
          <div className="text-center">
            <AiFillTool size={55} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
          <div className="text-center">
            <FaSortAmountUpAlt size={50} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
          <div className="text-center">
            <FaWarehouse size={55} className="highlight" />
            <p className="mt-2 text-white">
              iberati dell’amianto con l’aiuto di Sunprime e del Decreto FER a
              zero spese
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
