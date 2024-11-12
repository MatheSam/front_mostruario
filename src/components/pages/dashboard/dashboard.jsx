import React from "react";
import api from "../../../services/api";

const Dashboard = () => {
  const token = localStorage.getItem("@userToken");
  
  const formData = () => {
    api
      .get("/dashboard/categorias", {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho Authorization
        }
      })
      .then((resp) => {
        console.log(resp)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      });
  };

  formData() 

  return (
    <section>
      dashboard
    </section>
  )
}

export default Dashboard;