import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { signInUser } from "../fetchers/signInUser";
import { setToken } from "../store/slice/auth";
import { LinkBase } from "../components/styles/LinkBase";
import "./LoginPage.css";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthSubmit = useCallback(
    (user) => {
      signInUser({ email: user.email, password: user.password })
        .then(({ idToken }) => {
          dispatch(setToken(idToken));
          navigate("/home");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    [dispatch, navigate]
  );

  return (
    <div className="background-login">
      <div className="background-login-direction">
        <LoginForm onAuthSubmit={handleAuthSubmit} />
        <p className="background-login-link-to-register">
          No account?
          <LinkBase to="/registration"> Create one </LinkBase>
        </p>
      </div>
    </div>
  );
};
