import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/api/products")
      .then((res) => res.json())
      .then((data) => {
        // If you have a category field, filter for iPhones. Otherwise, remove the filter.
        setIphones(
          data.products.filter((p) => p.category === "iphone" || !p.category)
        );
      });
  }, []);

  return (
    <div>
      <h2>iPhones</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        {iphones.map((phone) => (
          <div key={phone.id} style={{ border: "1px solid #eee", padding: 16 }}>
            <img src={phone.product_img} alt={phone.product_name} width={200} />
            <h3>{phone.product_name}</h3>
            <p>{phone.product_description}</p>
            <p>Starting at: {phone.starting_price}</p>
            <Link to={`/iphones/${phone.id}`}>Learn more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
