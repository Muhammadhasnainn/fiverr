import React from "react";
import { FaRadiation, FaWarehouse } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

const Address = () => {
  return (
    <section className="Address mt-10 pb-3">
      <h1 className="text-center fw-bold heading_style">A chi ci rivolgiamo?</h1>
      <p className="text-center mt-4 fs-5 text-muted">
        Sunprime fa per te se rientri in almeno uno dei casi sotto descritti
      </p>

      <div className="canvas">
        <div className="cards-grid">
          <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
            <div className="d-flex align-items-center justify-content-center icon">
              <FaRadiation size={50} />
            </div>
            <p className="fw-bold">MATERIALI DANNOSI</p>
            <p className="mt-3">
              A chi possiede capannoni con tetti in amianto.
            </p>
          </div>

          <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
            <div className="d-flex align-items-center justify-content-center icon">
              <FaWarehouse size={50} />
            </div>
            <p className="fw-bold">GRANDI CAPANNONI</p>
            <p className="mt-3">
              A chi possiede capannoni di grandi dimensioni (sopra i 2500 mq).
              Con qualsiasi consumo energetico.
            </p>
          </div>

          <div className="text-white d-flex flex-column align-items-center justify-content-center Card text-center">
            <div className="d-flex align-items-center justify-content-center icon">
              <GiElectric size={50} />
            </div>
            <p className="fw-bold">CONSUMI ELEVATI</p>
            <p className="mt-3">
              A chi possiede capannoni di qualsiasi dimensione, con grande
              consumo elettrico annuo (sopra i 100.000 kWh annui)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
