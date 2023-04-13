import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PickUpArea = () => {
  const [formvalue, setFormvalue] = useState({
    email: "",
    pickup: "",
    date: "",
    time: "",
    Dropoff: "",
    numberpass: "",
    mobileNumber: "",
    message: "",

   
  });
  const [formerror, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const notify = () => toast("success full submit");
  const notify1 = () => toast("Filled the form");

  const resetForm = () => {
    setFormvalue(" ");
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validationform(formvalue));
    setSubmit(true);
  };
  const validationform = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!value.pickup) {
      errors.pickup = "please Enter pickup";     
    } 
    if(!value.date){
      errors.date = "please Enter date";
    }
     if(!value.time){
      errors.time = "please Enter time"; 
    } 
    if(!value.Dropoff){
      errors.Dropoff = "please Enter drop-off";
    }
     if(!value.numberpass ){
      errors.numberpass = "please Enter number of passenger";  
    }

    if (!value.mobileNumber) {
      errors.mobileNumber = "Please fill the Mobile no";
    } 
    if (value.mobileNumber.length < 10) {
      errors.mobileNumber = "enter 10 digit";
    } 
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && isSubmit) {
      console.log(formvalue);
    }
  }, [formerror]);

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
       <div className="col-lg-5">
        <img src="https://cdn.dribbble.com/users/1055192/screenshots/12841366/media/6f7d13c3737aebce2680d4e421e3b33f.gif" alt="" style={{width:"100%",height:"100%"}}/>
       </div>
       
        <div className="col-lg-7">
          <form onSubmit={handleSubmit}>
           <div className="row">
           <h4> <h3>Book a Taxi</h3></h4>
           <div className="col-lg-4 col-sm-9 py-2">
              <label className="pb-3">Enter Email</label>
              <input
                value={formvalue.email}
                
                name="email"
                type="email"
                placeholder="pick-up place"
                className="form-control"
                onChange={handleChange}
              />
              <span className="text-danger">{formerror.email}</span>
            </div>
           <div className="col-lg-4 col-sm-9 py-2">
              <label className="pb-3">Enter mobile no</label>
              <input
                value={formvalue.mobileNumber}
                
                name="mobileNumber"
                type="text"
                placeholder="pick-up place"
                className="form-control"
                onChange={handleChange}
              />
              <span className="text-danger">{formerror.mobileNumber}</span>
            </div>

            <div className="col-lg-4 col-sm-9 py-2">
              <label className="pb-3">Pick up place</label>
              <input
                value={formvalue.pickup}
                
                name="pickup"
                type="text"
                placeholder="pick-up place"
                className="form-control"
                onChange={handleChange}
              />
              <span className="text-danger">{formerror.pickup}</span>
            </div>
            <div className="col-lg-4 col-sm-9 py-2">
              <label className="pb-3">Drop off Destination</label>
              <input
                value={formvalue.Dropoff}
                
                name="Dropoff"
                type="text"
                placeholder="Drop off Destination"
                className="form-control"
                onChange={handleChange}
              />
              <span className="text-danger">{formerror.Dropoff}</span>
            </div>
               <div className="row">
               <div className="col-lg-4 col-sm-9 py-2">
              <label className="pb-3 ">Number of passengers</label>
              <input
                value={formvalue.numberpass}
                
                name="numberpass"
                type="text"
                placeholder="Number of passengers"
                className="form-control"
                onChange={handleChange}
              />
              <span className="text-danger">{formerror.numberpass}</span>
            </div>
            <div className="col-lg-4 col-sm-9 pb-2">
              <label className="pb-3">Pick up Date</label>
              <input
                value={formvalue.date}
                name="date"
                type="date"
                placeholder="dd-mm-yyyy"
                className="form-control"
                onChange={handleChange}
              />
              <span className="text-danger">{formerror.date}</span>
            </div>
            <div className="col-lg-4 col-sm-9 pb-2">
              <label className="pb-3">Pick up Time</label>
              <input
                value={formvalue.time}
                name="time"
                type="time"
                placeholder="HH:MM"
                className="form-control"
                onChange={handleChange}
              />
              <span className="text-danger">{formerror.time}</span>
            </div>
               </div>         
  

            <div className="col-lg-12 col-sm-9 py-2">
              <label className="pb-3">Any other requirement(optional) 
               </label>
              <textarea 
               value={formvalue.message}
                name="message"
                onChange={handleChange}
                rows="4" cols="50"
              className="form-control h-50" />
               
            </div>
             <div className="col-lg-2 col-4 pb-5 pt-3">
             {!(Object.keys(formerror).length === 1 && isSubmit) ? (
              <div>
                <button
                  type="submit"
                  name="button"
                  onClick={notify1}
                  className="btn btn-outline-primary"
                >
                  Book Now
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  name="button"
                  onClick={notify}
                  className="btn btn-outline-primary"
                >
                    Book Now
                </button>
              </div>
            )}
            <ToastContainer />
             </div>
             <div className="col-lg-3 col-5 pb-5 pt-3">
              <button
                onClick={() => resetForm()}
                type="reset"
                className="btn btn-outline-danger"
              >
                Reset Filled
              </button>
            </div>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PickUpArea;
