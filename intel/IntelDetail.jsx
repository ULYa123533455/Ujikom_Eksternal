import React from "react";
import "../detail.css";

const IntelDetail = (props) => {
  const { intel } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div id="card" className="card large">
          <div id="pagecard1">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="200"
              src={intel.image}
              alt={intel.nama}
              className="rounded"
            />
          </div>
          <section className="section-dark">
            <h2
              data-aos="fade-right"
              data-aos-duration="200"
              className="strong"
            >
              <strong>{intel.nama}</strong>
            </h2>
            <div data-aos="fade-right" data-aos-duration="300">
              <p> versi Bluetooth: {intel.cu}</p>
              <p>kapasitas baterai : {intel.bf}</p>
              <p>lama pengisian : {intel.core}</p>
              <p>waktu bermain musik : {intel.tu}</p>
              <p>kabel type : {intel.tc}</p>
              <p>deksripsi: {intel.vr}</p>
              <p>kelebihan : {intel.bw}</p>
              <p>Bluetooth frequency : {intel.pc}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntelDetail;
