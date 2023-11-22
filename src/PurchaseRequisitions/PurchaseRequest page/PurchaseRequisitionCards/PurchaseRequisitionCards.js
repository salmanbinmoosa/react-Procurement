import React from "react";

// importing style from PurchaseRequisitionCards.css
import "./PurchaseRequisitionCards.css";

function PurchaseRequisitionCards(PurchaseRequisitionCards) {
  return (
    <div className="PurchaseRequisitionCard">
      <div className="PurchaseRequisitionCardLeft">
        <img src={PurchaseRequisitionCards.img} alt="" />
      </div>

      <div className="PurchaseRequisitionCardRight">
        <h2>{PurchaseRequisitionCards.value}</h2>
        <p>{PurchaseRequisitionCards.status}</p>
      </div>
    </div>
  );
}

export default PurchaseRequisitionCards;
