import React from "react";
import { FaRadiation } from "react-icons/fa";

const Services = () => {
  return (
    <section className="Services mt-10">
      <div className="w-100">
        <h1 className="text-center fw-bold text-white">Cosa otterrai con Sunprime?</h1>
        <p className="mt-3 text-center fs-5 text-white mb-5">
          Un servizio gratuito, green e vantaggioso
        </p>

        <div className="canvas">
          <div className="cards-grid">
            <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
              <div className="d-flex align-items-center justify-content-center icon">
                <FaRadiation size={50} />
              </div>
              <p className="fw-bold fs-5">Smaltimento</p>
              <p className="mt-3">
                Copriamo interamente i costi di smaltimento dell’amianto e
                realizziamo la nuova copertura.
              </p>
            </div>
            <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
              <div className="d-flex align-items-center justify-content-center icon">
                <FaRadiation size={50} />
              </div>
              <p className="fw-bold fs-5">Guadagni</p>
              <p className="mt-3">
                Un corrispettivo fino a 25€ al mq per l’uso del tuo tetto in
                buono stato
              </p>
            </div>
            <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
              <div className="d-flex align-items-center justify-content-center icon">
                <FaRadiation size={50} />
              </div>
              <p className="fw-bold fs-5">Risparmio</p>
              <p className="mt-3">
                Con Sunprime avrai uno sconto fino al 40% sul prezzo
                dell’energia elettrica, per sempre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
