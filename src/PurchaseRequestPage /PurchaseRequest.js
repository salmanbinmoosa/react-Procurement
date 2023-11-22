import React from "react";
import "./PurchaseRequest.css";
import RequesterDetails from "./RequesterDetails/RequesterDetails";
import RequestApproveBtns from "./RequestApproveBtns/RequestApproveBtns";
import OrderLineTable from "../PurchaseRequisitions/OrderLineTable/OrderLineTable";
function PurchaseRequest() {
  return (
    <main className="PurchaseRequest">
      <div className="PurchaseHeadings">
        <h2 className="PurchaseHeadingOne">Purchase Requisitions</h2>
        <img src="" alt="" />
        <h2 className="PurchaseHeadingTwo">Purchase Request</h2>
      </div>

      {/* requester details */}

      <div className="requesterApprove">
        {/* requeser detail container */}
        <RequesterDetails />
        <RequestApproveBtns />
      </div>

      <div className="OrderLineTable">
        <div className="OrderLineTableHeading">
          <h2>Order Line 04</h2>
          <div className="OrderLineTableWrapper">
            <OrderLineTable />
          </div>
        </div>
      </div>

      <div className="commentSection">
        <div className="commentWrapper">
          <h2>Comment</h2>
          <div className="comment"></div>
        </div>

        <div className="orderLineWrapper">
          <h2>Order Line 04</h2>
<div className="OrderLine2">
    
</div>

        </div>
      </div>
    </main>
  );
}

export default PurchaseRequest;
