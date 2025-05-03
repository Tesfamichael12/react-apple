import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function IphoneDetail() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:2000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setPhone(data.product));
  }, [id]);

  if (!phone) return <div>Loading...</div>;

  return (
    <div style={{ padding: 32 }}>
      <h2>{phone.product_name}</h2>
      <img src={phone.product_img} alt={phone.product_name} width={300} />
      <p>{phone.product_detail_description}</p>
      <p>Starting at: {phone.starting_price}</p>
      <p>Monthly Plan: {phone.price_range}</p>
    </div>
  );
}

export default IphoneDetail;
