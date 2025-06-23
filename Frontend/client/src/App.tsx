import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Auth } from "./Pages/auth";
import { Dashboard } from "./Pages/dashboard";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn,UserButton } from "@clerk/clerk-react";
function App() {

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Dashboard</Link>
           <SignedIn>
        <UserButton showName />
      </SignedIn>
        </div>
        <Routes>
          <Route path="/" element={ 
            <FinancialRecordsProvider>
            <Dashboard/>
            </FinancialRecordsProvider>}/>            
          <Route path="/auth" element={<Auth/>}/>            
        </Routes>
      </div>
    </Router>
  )
}

export default App
