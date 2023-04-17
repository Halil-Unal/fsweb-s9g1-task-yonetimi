import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PeopleForm = ({ kisiler, submitFn }) => {
  const notify = () => toast("kişi eklendi!");
  const [isim, setIsim] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (kisiler.includes(isim)) {
      setError("Bu isim daha önce eklenmiş")
    } else {
      setError(null)
    }
  }, [isim, kisiler])

  function handleIsimChange(e) {
    setIsim(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitFn(isim);
    setIsim("");
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          onChange={handleIsimChange}
          value={isim}
        />
        <p className="input-error">{error}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={isim.length === 0 || error}
          onClick={notify}
        >
          Ekle
        </button>
        <ToastContainer
        	position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
      </div>
    </form>
  );
};

export default PeopleForm;
