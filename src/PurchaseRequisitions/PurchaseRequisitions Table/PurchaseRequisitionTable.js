import React from "react";
import "./PurchaseRequisitionTable.css";
import PendingBtn from "../../commonComponents/searchBar/status buttons and more/PendingBtn";

function PurchaseRequisitionTable() {
  return (
    <table className="PurchaseRequisitionTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Creation Date</th>
          <th className="td-padding">Total Cost</th>
          <th>Priority</th>
          <th>Status</th>
          <th className="action-con td-end">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <div className="td-flex">
              {" "}
              <img src="../PurchaseRequisitionsAssets/Avarar.png" alt="" />
              <p>Justin salman bin moosa aaaaaaSeptimus</p>
            </div>
          </td>
          <td>Bouvet Island</td>
          <td>06/07/2023</td>
          <td>$299.14</td>
          <td className="statusColumn">
            <PendingBtn />
          </td>
          <td className="statusColumn">On Hold</td>
          <td className="action-column">
            <img src="/images/Shape/More.png" alt="" />{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PurchaseRequisitionTable;
