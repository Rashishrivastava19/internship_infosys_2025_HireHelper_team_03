// App.jsx — Imports
import React, { useState } from "react";
import "./Styles/App.css";

// Components
import WelcomePanel from "./Components/WelcomePanel";
import LoginForm from "./Components/LoginForm";
import OtpVerificationPage from "./Components/OtpVerificationPage";
import Header from "./Components/Header";

// Pages / Layout
import Dashboard from "./Pages/Dashboard";
import MyTasksPage from "./Pages/MyTasksPage";
import RequestsPage from "./Pages/RequestsPage";
import MyRequestsPage from "./Pages/MyRequestsPage";
import AddTaskPage from "./Pages/AddTaskPage";
import SettingsPage from "./Pages/SettingsPage";
import HelpSupport from "./Pages/HelpSupport";

const App = () => {
  const [appState, setAppState] = useState("login");
  const [activeTab, setActiveTab] = useState("signin");

  const handleNavigation = (state) => setAppState(state);
  const handleAuthenticationComplete = () => setAppState("otp");
  const handleVerificationSuccess = () => setAppState("dashboard");
  const handleBackToLogin = () => {
    setAppState("login");
    setActiveTab("signin");
  };
  const handleLogout = () => {
    setAppState("login");
    setActiveTab("signin");
  };

  const renderContent = () => {
    switch (appState) {
      case "dashboard":
        return (
          <Dashboard
            onLogout={handleLogout}
            onNavigate={handleNavigation}
            appState={appState}
          />
        );

      case "mytasks":
      case "requests":
      case "myrequests":
      case "addtask":
      case "settings":
      case "help":  
        
        return (
          <div className="dashboard-layout">
            <Dashboard
              onLogout={handleLogout}
              onNavigate={handleNavigation}
              appState={appState}
              overrideMain={() => (
                <div className="main-content">
                  {/* Header (Topbar) appears on all pages except Dashboard */}
                  <header className="dashboard-header">
                    <Header onLogout={handleLogout} showWelcome={false} />
                  </header>

                  {/* Conditional Page Rendering */}
                  {appState === "mytasks" && <MyTasksPage />}
                  {appState === "requests" && <RequestsPage onNavigate={handleNavigation} />}
                  {appState === "myrequests" && <MyRequestsPage />}
                  {appState === "addtask" && <AddTaskPage />}
                  {appState === "settings" && <SettingsPage />}
                  {appState === "help" && <HelpSupport />}
                </div>
              )}
            />
          </div>
        );

      case "otp":
        return (
          <OtpVerificationPage
            onVerificationSuccess={handleVerificationSuccess}
            onBackToLogin={handleBackToLogin}
          />
        );

      case "login":
      default:
        return (
          <div className="app-container">
            <WelcomePanel />
            <div className="right-panel">
              <LoginForm
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onAuthenticationComplete={handleAuthenticationComplete}
              />
            </div>
          </div>
        );
    }
  };

  return <div className="hirehelper-app">{renderContent()}</div>;
};

export default App;
