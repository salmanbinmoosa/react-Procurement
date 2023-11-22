import React from "react";
import './DashboardPage.css'
import TopSuppliers from "../TopSuppliers/TopSuppliers";
import RequestByDayChart from "../RequestByDayChart/RequestByDayChart";
function DashboardPage() {
  return (
    <main className="dashboard">
      <div className="dashboardHeadings">
        <h2>Dashboard</h2>
        <p>Hello, James. Welcome to Synectiks</p>
      </div>

      {/* dashboards cards */}

      <div className="dashboardCards"></div>

      {/* dashboard charts */}
      <div className="dashboardCharts">
        <div className="spendAnalysis">
          <h1>Spend Analysis</h1>
        </div>

        <div className="requisitionStats"></div>
      </div>

      {/* purchase order */}
      <div className="purchaseOrder">
        <h1>Purchase Order</h1>
      </div>
      {/* dashboardChartsTwo */}
      <div className="dashboardChartsTwo">
        <div className="topSuppliers">
          <TopSuppliers />
        </div>

        <div className="requestDay">
          <h1>Request by time of day</h1>
          <RequestByDayChart/>
        </div>

        <div className="monthlyExpense"></div>
      </div>
    </main>
  );
}

export default DashboardPage;
