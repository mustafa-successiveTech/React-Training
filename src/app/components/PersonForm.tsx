import { useState } from "react";

export default function PersonForm() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [age, setAge] = useState<string>(" ");
  const ageNum = parseFloat(age ?? "0");

  return (
    <>
      <div className="parent">
        <div className="child">
          <input
            type="text"
            placeholder="Enter firstName : "
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter lastName : "
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter age : "
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <div className="child">
            <h4>
              <b>Name :</b> {firstName} {lastName}
            </h4>
          </div>
          <div className="child">
            <p>
              <b>Age :</b> {age}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
