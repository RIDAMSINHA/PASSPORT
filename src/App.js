import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PassportLogin from "./components/Frontpage";
import ErrorPage from './components/utilites/ErrorPage';
import PassportSystem from './components/ApproveRequest';
import GovernmentPortal from './components/Governmentpage';
import Login from './components/User_Login';
import PasswordChangeRequest from './components/Password';
import PassportDetailsForm from './components/Redirect';
import Sign_up from './components/Sign_up';
import User from './components/User';
import User_Details from './components/Details';
import { SubContractProvider } from './components/utilites/SubContractContext';
import Signup_border from './components/Signup_border';
import Border_Login from './components/Border_Login';
import Signup_visa from './components/Signup_visa';
import Visa_Login from './components/Visa_Login';
import Gov_Login from './components/Gov_Login';
import Signup_gov from './components/Signup_gov';
import Visa_status from './components/Visa_status';


function App() {
  return (
    <Router>
      <SubContractProvider>
        <div>
          <Routes>
            <Route path="/" element={<PassportLogin />} errorElement={<ErrorPage />} />

            <Route path="/user_login" element={<Login />} errorElement={<ErrorPage />} />
            <Route path="/sign_up" element={<Sign_up />} errorElement={<ErrorPage />} />
            <Route path="/details" element={<User_Details />} errorElement={<ErrorPage />} />
            <Route path="/user" element={<User />} errorElement={<ErrorPage />} />
            
            <Route path="/gov_login" element={<Gov_Login />} errorElement={<ErrorPage />} />
            <Route path="/signup_gov" element={<Signup_gov />} errorElement={<ErrorPage />} />
            
            <Route path="/signup_visa" element={<Signup_visa />} errorElement={<ErrorPage />} />
            <Route path="/visa_login" element={<Visa_Login />} errorElement={<ErrorPage />} />
            <Route path="/visa" element={<Visa_status />} errorElement={<ErrorPage />} />
            
            <Route path="/border_login" element={<Border_Login />} errorElement={<ErrorPage />} />
            <Route path="/signup_border" element={<Signup_border />} errorElement={<ErrorPage />} />
            
            {/* These are not yet implemented */}
            <Route path="/gov_portal" element={<GovernmentPortal />} errorElement={<ErrorPage />} />
            <Route path="/approve" element={<PassportSystem />} errorElement={<ErrorPage />} />
            <Route path="/change_password" element={<PasswordChangeRequest />} errorElement={<ErrorPage />} />
            <Route path="/redirect" element={<PassportDetailsForm />} errorElement={<ErrorPage />} />
            
          </Routes>
        </div>
      </SubContractProvider>
    </Router>
  );
}

export default App;
