import React from "react";
import { BsCurrencyDollar, BsSortDown } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

const RowSection = ({ direction, heading ,img}) => {
  return (
    <div className="RowSection mt-10">
      <div className={`d-flex ${direction} canvas`}>
        <div className="w-50 me-5">
          <img src={img} className="w-100 h-100" />
        </div>
        <div className="w-50">
          <h1 className="fw-bold">
            {heading}
          </h1>
          <p className="mt-4 fs-5 text-muted">
            Fai la tua parte, diventa un produttore e riduci il tuo impatto
            sull’ambiente
          </p>
          <div className="details mt-5">
            <div className="d-flex align-items-center">
              <FaLeaf size={70} className="blue" />
              <div className="ms-3">
                <p className="fw-bold fs-5">Diventa più sostenibile</p>
                <p className="text-muted mt-1">
                  Producendo energia rinnovabile contribuisci a ridurre le
                  emissioni di CO2 rendendo più sostenibile la tua attività
                  produttiva, limitando il tuo impatto sull’ambiente e
                  migliorando l’immagine della tua azienda.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-2">
              <BsCurrencyDollar size={100} className="blue" />
              <div className="ms-3">
                <p className="fw-bold fs-5">Basta bollette alte</p>
                <p className="text-muted mt-1">
                  In Europa le imprese italiane sono tra quelle che pagano i
                  costi più elevati per l’energia elettrica, a causa dei
                  crescenti costi di trasmissione e distribuzione
                  dell’elettricità e degli elevati oneri del sistema, che
                  rendono la tua azienda meno competitiva.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-2">
              <BsSortDown size={80} className="blue" />
              <div className="ms-3">
                <p className="fw-bold fs-5">
                  Contribuisci alla transizione energetica
                </p>
                <p className="text-muted mt-1">
                  Produci energia rinnovabile come stanno già facendo oltre
                  150.000 imprese in tutta Europa, e contribuisci alla
                  transizione energetica, per riuscire finalmente a fare la
                  differenza.
                </p>
              </div>
            </div>
            <button
              className="btn primary_btn mt-5 px-4 py-2 mx-auto d-block
             text-white"
            >
              Scopri il risparmio <HiOutlineArrowSmRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowSection;
