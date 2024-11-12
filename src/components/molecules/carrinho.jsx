import { CiShoppingCart  } from "react-icons/ci";
import React from "react";

const Carrinho = ({fixed}) => {
  return (
    <section>
      <CiShoppingCart  className={`text-4xl`} />
    </section>
  )
}

export default Carrinho;