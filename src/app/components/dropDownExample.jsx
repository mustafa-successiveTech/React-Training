import { useState } from "react"

export default function DropDownExample() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <>
            <h1>DropDown Component</h1>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">--Choose--</option>
                <option value="orange">Orange</option>
                <option value="banana">Banana</option>
                <option value="apple">Apple</option>
                <option value="kiwi">Kiwi</option>
            </select>

            {selectedOption && (
                <p>You selected: <strong>{selectedOption}</strong></p>
            )}
        </>
    )
};