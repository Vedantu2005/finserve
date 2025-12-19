import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetail from "./pages/ArticleDetails";
import ConsumerFinance from "./pages/consumerFinancing";
import MerchentProcessing from "./pages/merchentProcessing";
import Payroll from "./pages/Payroll";
import ShipingLogistics from "./pages/ShipingLogistics";
import ProfitRecovery from "./pages/ProfitRecovery";
import Refral from "./pages/TestimonialsPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import RequireAdmin from "./components/RequireAdmin";
import ContactPage from "./pages/Contact";
import Funding from "./pages/Funding";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/articleDetail" element={<ArticleDetail />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
        <Route path="/consumerFinance" element={<ConsumerFinance />} />
        <Route path="/merchentProcessing" element={<MerchentProcessing />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/shipingLogistics" element={<ShipingLogistics />} />
        <Route path="/profit" element={<ProfitRecovery />} />
        <Route path="/refral" element={<Refral />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
