import { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState<string>("");
  const items : string[] = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h3>Search Filter</h3>
      <input
        type="text"
        value={search}
        placeholder="Search.."
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
