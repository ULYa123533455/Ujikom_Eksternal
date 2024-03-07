import React from "react";
import "../detail.css";

const AmdDetail = (props) => {
  const { amd } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div id="card" className="card large">
          <div id="pagecard1">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="200"
              src={amd.image}
              alt={amd.nama}
              className="rounded"
            />
          </div>
          <section className="section-dark">
            <h2
              data-aos="fade-right"
              data-aos-duration="200"
              className="strong"
            >
              <strong>{amd.nama}</strong>
            </h2>
            <div data-aos="fade-right" data-aos-duration="300">
              <p> versi Bluetooth: {amd.cu}</p>
              <p>kapasitas baterai : {amd.bf}</p>
              <p>lama pengisian : {amd.core}</p>
              <p>waktu bermain musik : {amd.tu}</p>
              <p>kabel type : {amd.tc}</p>
              <p>deksripsi: {amd.vr}</p>
              <p>kelebihan : {amd.bw}</p>
              <p>Bluetooth frequency : {amd.pc}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AmdDetail;
