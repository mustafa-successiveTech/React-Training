import { useMemo, useState } from "react";

export default function EmployeeSalary() {

    const [emp,setEmp] = useState([
        { name: 'Aman', salary: 40000 },
        { name: 'Zoya', salary: 45000 },
        { name: 'Mustafa', salary: 50000 },
        { name: 'Priya', salary: 42000 },
        { name: 'Kabir', salary: 48000 },
    ]);

    const AvgSalary = useMemo(() => {
        const total = emp.reduce((acc, ele) => acc + ele.salary, 0);
        return total/emp.length;
    },[emp ]);

     const updateSalaries = () => {
        setEmp(prev =>
        prev.map(emp => ({
            ...emp,
            salary: emp.salary + 5000, 
        }))
        );
    };


    return (
        <>
            <h2>Employee List</h2>
            <ul>
                {emp.map((e, index) => (
                    <li key={index}>
                        {e.name} - ₹{e.salary}
                    </li>
                ))}
            </ul>
            <p>Average Salary : {AvgSalary}</p>
            
            <button onClick={updateSalaries}>Update Salary by 5000</button>

        </>
    )
}