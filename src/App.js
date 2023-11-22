import logo from "./logo.svg";
import "./App.css";
import DashboardCards from "./dashboard/DashboardCards";
import TopSuppliers from "./dashboard/TopSuppliers/TopSuppliers";
import DashboardPage from "./dashboard/dashboardPage/DashboardPage";
// import PurchaseRequisitions from "./PurchaseRequisitions/PurchaseRequisitionsPage/PurchaseRequisitions";
import PurchaseRequest from "./PurchaseRequestPage /PurchaseRequest";
import Chartpractice from "./charts/Chartpractice";
// import Chartpractice from "./charts/Chartpractice";

// import ApexChart from "./charts/Chartpractice";
// import PurchaseRequisitionTable from "./Purchase Requisitions/PurchaseRequisitions Table/PurchaseRequisitionTable";
// import PurchaseRequest from "./PurchaseRequisitions/PurchaseRequest page/PurchaseRequest/PurchaseRequest/PurchaseRequest";

function App() {
 
  return (
    <>
      <div className="app">
        <div className="app-left">
          <h1>nav area</h1>
          <h2>Purchase resssss</h2>
        </div>

        <div className="app-right">
          <header>
            {/* <h1>header</h1> */}
          </header>
          {/* <PurchaseRequisitions /> */}
          {/* <PurchaseRequisitionTable/> */}
          {/* <PurchaseRequest/> */}

<Chartpractice/>
          {/* <DashboardPage/> */}
        </div>
      </div>
    </>
  );
}

export default App;
