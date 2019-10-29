import React from "react";

const ProductRow = ({ name, keyword, stocked, price, checked }) => {
  const reg = new RegExp(keyword, "i");
  // const loweredName = name.toLowerCase();
  // const loweredKeyword = keyword.toLowerCase();
  // if (!loweredName.includes(loweredKeyword)) return null;
  if (checked && !stocked) return null;
  if (!reg.test(name)) return null;
  return (
    <tr>
      <td style={{ color: !stocked && "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
