import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PassportLogin from "./components/Frontpage";
import ErrorPage from './components/ErrorPage';
import PassportSystem from './components/ApproveRequest';
import GovernmentPortal from './components/Governmentpage';
import Login from './components/User_Login';
import Gov_Login from './components/Gov_Login';
import PasswordChangeRequest from './components/Password';
import PassportDetailsForm from './components/Redirect';
import Signup_gov from './components/Signup_gov';
import Sign_up from './components/Sign_up';
import User from './components/User';


function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<PassportLogin />} errorElement={<ErrorPage />} />
          <Route path="/user_login" element={<Login />} errorElement={<ErrorPage />} />
          <Route path="/sign_up" element={<Sign_up />} errorElement={<ErrorPage />} />
          <Route path="/gov_login" element={<Gov_Login />} errorElement={<ErrorPage />} />
          <Route path="/signup_gov" element={<Signup_gov />} errorElement={<ErrorPage />} />
          <Route path="/gov_portal" element={<GovernmentPortal />} errorElement={<ErrorPage />} />
          <Route path="/approve" element={<PassportSystem />} errorElement={<ErrorPage />} />
          <Route path="/change_password" element={<PasswordChangeRequest />} errorElement={<ErrorPage />} />
          <Route path="/redirect" element={<PassportDetailsForm />} errorElement={<ErrorPage />} />
          <Route path="/user" element={<User />} errorElement={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
