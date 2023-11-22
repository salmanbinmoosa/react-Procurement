import React from "react";
import "./PurchaseRequisitions.css";
import PurchaseRequisitionCards from "../PurchaseRequest page/PurchaseRequisitionCards/PurchaseRequisitionCards";
import SearchBar from "../../commonComponents/searchBar/SearchBar";
import PurchaseRequisitionTable from "../PurchaseRequisitions Table/PurchaseRequisitionTable";
import HoldRequestModal from "../../commonComponents/HoldRequestModal/HoldRequestModal";

// importing images from public

function PurchaseRequisitions() {
  return (
    <main className="purchaseRequisitionsPage">
      <div className="purchaseRequisitionsPageHeading">
        <h2>Purchase Requisitions</h2>
      </div>
      {/* purchase Requisitions cards */}
      <div className="purchaseRequisitionscards">
        <PurchaseRequisitionCards
          img="../PurchaseRequisitionsAssets/allRequest.png"
          status="request pending"
          value="122"
        />

        <PurchaseRequisitionCards
          img="../PurchaseRequisitionsAssets/allRequest2.png"
          status="request pending"
          value="122"
        />

        <PurchaseRequisitionCards
          img="../PurchaseRequisitionsAssets/allRequest3.png"
          status="request pending"
          value="122"
        />

        <PurchaseRequisitionCards
          img="../PurchaseRequisitionsAssets/allRequest4.png"
          status="request pending"
          value="122"
        />

        <PurchaseRequisitionCards
          img="../PurchaseRequisitionsAssets/allRequest5.png"
          status="request pending"
          value="122"
        />
        {/* <PurchaseRequisitionCards/> */}
      </div>

      <div className="requestLists">
        <div className="requestListsTop">
          <SearchBar />
        </div>

        <PurchaseRequisitionTable />
      </div>
      <HoldRequestModal/>
    </main>
  );
}

export default PurchaseRequisitions;
