"use client"
import { useState } from "react"

export default function VariousInputField() {
  const [formData, setFormData] = useState({
      name: '',
      acceptTerms: false,
      gender: '',
  });

  const handleChange = (e) => {
      const {name, value, type, checked} = e.target;

      setFormData((prev) => ({
          ...prev,
          [name] : type === 'checkbox' ? checked : value 
      }));
  };

  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("FormData", formData);
      
  }

  return (
      <>
          <form onSubmit={handleSubmit}>
              <h2>Controlled Component</h2>

              <input 
                      type="text" 
                      name="name"
                      value={formData.name} 
                      placeholder="Enter name.." 
                      onChange={handleChange}
              />

              <br></br>

              <label>
                  <input 
                      type="checkbox"
                      name="acceptTerms"
                      value={formData.acceptTerms}
                      onChange={handleChange} 
                  />
                  Accepted
              </label>

              <br />

              <label>
                  <input 
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange} 
                  />
                  Male
              </label>

              <label>
                  <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  />
                  Female
              </label>

              <br />

              <button type="submit">Submit</button>
          </form>
      </>
  )
};