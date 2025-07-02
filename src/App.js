import "./App.css";
import MUIRegistrationForm from "./Component/RegistrationForm";
import Registrationnipamform from "./Component/Registrationnipamform";
// import ConfirmationPage from "./Component/Congratulation";
// import Heading from './Component/Heading';
// import ImgContainer from './Component/ImgContainer';
// import Match from './Component/Match';
// import AfterHeading from './Component/AfterHeading';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import AdminPage from "./Component/Tables/adminPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:schoolmail" element={<MUIRegistrationForm />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
            <Route path="/registration-nipam" element={<Registrationnipamform />} />
          <Route path="/district" element={<AdminPage />} />
        </Routes>
      </Router>
      {/*
<div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
  <Heading />
  <AfterHeading />
  <ImgContainer />
  <Match />
  <Match />
  <Match />
  <Match />
  <Match />
</div>
*/}
    </div>
  );
}

export default App;
