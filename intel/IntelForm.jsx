import React, { useState } from "react";
import Project from "../Project";

const IntelForm = ({ intel: initialProject, onSave, onCancel }) => {
  const [intel, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    nama: "",
    cu: "",
    bf: "",
    core: "",
    tu: "",
    tc: "",
    vr: "",
    bw: "",
    pc: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(intel);
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setProject((p) => new Project({ ...p, [name]: updatedValue }));
    setErrors(validate({ ...intel, [name]: updatedValue }));
  };

  const validate = (values) => {
    let newErrors = {};
    if (values.nama.trim() === "") {
      newErrors.nama = "Name is required";
    } else if (values.nama.length < 3) {
      newErrors.nama = "Name needs to be more than 3 characters";
    }

    return newErrors;
  };

  const isValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="nama"> JBL Name </label>
      <input
        type="text"
        name="nama"
        placeholder="Enter Name"
        value={intel.nama}
        onChange={handleChange}
      />
      <span className="error">{errors.nama}</span>

      <label htmlFor="bf"> kapasitas baterai </label>
      <input
        type="text"
        name="bf"
        placeholder="Enter"
        value={intel.bf}
        onChange={handleChange}
      />
      <span className="error">{errors.bf}</span>

      <label htmlFor="tc"> kabel type </label>
      <input
        type="text"
        name="tc"
        placeholder="Enter "
        value={intel.tc}
        onChange={handleChange}
      />
      <span className="error">{errors.tc}</span>

      <label htmlFor="vr"> deksripsi </label>
      <input
        type="text"
        name="vr"
        placeholder="Enter "
        value={intel.vr}
        onChange={handleChange}
      />
      <span className="error">{errors.vr}</span>

      <label htmlFor="bw"> kelebihan </label>
      <input
        type="text"
        name="bw"
        placeholder="Enter "
        value={intel.bw}
        onChange={handleChange}
      />
      <span className="error">{errors.bw}</span>

      <label htmlFor="pc"> Bluetooth frequency</label>
      <input
        type="text"
        name="pc"
        placeholder="Enter Bus Interface Version"
        value={intel.pc}
        onChange={handleChange}
      />
      <span className="error">{errors.pc}</span>

      <label htmlFor="cu"> versi Bluetooth</label>
      <input
        type="number"
        name="cu"
        placeholder="Enter"
        value={intel.cu}
        onChange={handleChange}
      />
      <span className="error">{errors.cu}</span>

      <label htmlFor="core"> lama pengisian</label>
      <input
        type="text"
        name="core"
        placeholder="Enter"
        value={intel.core}
        onChange={handleChange}
      />
      <span className="error">{errors.core}</span>

      <label htmlFor="tu"> waktu bermain musik</label>
      <input
        type="text"
        name="tu"
        placeholder="Enter "
        value={intel.tu}
        onChange={handleChange}
      />
      <span className="error">{errors.tu}</span>

      {/* Add similar blocks for other form inputs */}

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default IntelForm;
