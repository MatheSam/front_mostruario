import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

const Categorias = () => {
  const {categoria, subcategoria} = useParams();
  const [cateData, setCateData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchProd = async () => {
      try {
        const resp = await api.get(`categorias/${categoria}/${subcategoria}`);
        setCateData(resp.data);
      } catch (error) {
        setErr(error.response?.data?.message || error.message);
      }
    }

    fetchProd();
  }, [categoria])

  if (err) {
    return <div>Error: {err}</div>
  };
  console.log(cateData)
  return (
    <section>
      {cateData[0]?.products?.map((el, index) => {
        const {title} = el;
        return (
          <div>
            <p>{title}</p>
          </div>
        )
      })}
    </section>
  )

}

export default Categorias;
