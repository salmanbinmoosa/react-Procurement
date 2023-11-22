import React from "react";
import "./HoldRequestModal.css";
function HoldRequestModal() {
  return (
    <div className="HoldRequestModal">
        <img src="../CommonImages/onHold.png" alt="" />
      <h2>Do you want to Hold this Request?</h2>
      <p>This action can’t be undone</p>
      <div className="HoldRequestModalBtns">
        <button className="HoldRequestModalHold" >On Hold</button>
        <button className="HoldRequestModalCancel">Cancel</button>
      </div>
    </div>
  );
}

export default HoldRequestModal;
