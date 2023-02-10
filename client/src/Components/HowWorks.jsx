import React from "react";
import { FaCheck, FaPhone, FaPiggyBank } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import {TbHandClick} from "react-icons/tb";

const HowWorks = () => {
  return (
    <div className="worksection mt-10">
      <h1 className="fw-bold text-center text-white mt-3">
        Come funziona Sunprime
      </h1>
      <div className="canvas">
        <div className="small-grid">
          <div className="text-center text-white">
            <p className="highlight">STEP 1</p>
            <HiCursorClick className="highlight mt-2" size={50} />
            <p className="fs-5 fw-bold mt-2">SELEZIONA IL TUO TETTO</p>
            <p className="mt-2">
              Segui la procedura online dove potrai individuare sulla mappa il
              tuo immobile. Inserendo i dati richiesti saremo in grado di
              fornirti un’offerta personalizzata.
            </p>
          </div>
          <div className="text-center text-white">
            <p className="highlight">STEP 2</p>
            <FaPiggyBank className="highlight mt-2" size={50} />
            <p className="fs-5 fw-bold mt-2">SCOPRI IL TUO RISPARMIO</p>
            <p className="mt-2">
              In pochi minuti siamo in grado di darti un’indicazione sul
              risparmio in bolletta ed i ricavi dalla vendita dell’energia in
              rete di cui potrai beneficiare.
            </p>
          </div>
          <div className="text-center text-white">
            <p className="highlight">STEP 3</p>
            <FaPhone className="highlight mt-2" size={50} />
            <div className="mt-2">
              <p className="fs-5 fw-bold mt-2">ASSISTENZA PERSONALIZZATA</p>
              <p className="mt-2">
                Verrai poi contattato da un nostro consulente che raccoglierà
                ulteriori dati ed organizzerà un sopralluogo. Ci occuperemo poi
                dell'installazione, e ci prenderemo cura dell'impianto
              </p>
            </div>
          </div>
          <div className="text-center text-white">
            <p className="highlight">STEP 4</p>
            <FaCheck className="highlight mt-2" size={50} />
            <p className="fs-5 fw-bold mt-2">RISPARMIO IMMEDIATO</p>
            <p className="mt-2">
              Inizierai a risparmiare fin da subito sulla bolletta dell'energia,
              nel pieno rispetto dell'ambiente, facendo diventare la tua azienda
              più sostenibile!
            </p>
          </div>
        </div>
        <button className="btn primary_btn d-block text-white py-2 px-4 mx-auto mt-5">
            Inizia la procedura online <TbHandClick size={25}/></button>
      </div>
    </div>
  );
};

export default HowWorks;
