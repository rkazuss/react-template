import { Route, Routes } from 'react-router-dom';
import LoginPage from '../features/Login';
import SignUp from '../features/SignUp';

const Auth = () => {
  return (
    <div>
      <h2>Auth Page</h2>
      <Routes>
        <Route
          path="login"
          element={<LoginPage />}
        />
        <Route
          path="register"
          element={<SignUp />}
        />
      </Routes>
    </div>
  );
};

export default Auth;
