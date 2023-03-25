import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import OwnerLoading from "./components/Owner/Loading/OwnerLoading";
import Admin from "./routes/Admin";
import Owner from "./routes/Owner";
import User from "./routes/User";


function App() {
  // const [userLoading, setUserLoading] = useState(false)


  return (
    <>
    {/* {userLoadingStatus && <OwnerLoading/> }  */}
    
    <Router>
      <Routes>
        <Route path="/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/owner/*" element= {<Owner />} /> 
      </Routes>
    </Router>
    </>
  );
}
export default App;


