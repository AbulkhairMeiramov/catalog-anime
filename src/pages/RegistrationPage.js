import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "../components/RegistrationForm";
import { LinkBase } from "../components/styles/LinkBase";
import { signUpUser } from "../fetchers/signUpUser";
import { setToken } from "../store/slice/auth";
import "./RegistrationPage.css";

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserCreated = useCallback(
    (user) => {
      signUpUser({ email: user.email, password: user.password })
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
    <div className="background-registration">
      <div className="background-registration-direction">
        <RegistrationForm onUserCreated={handleUserCreated} />
        <p className="background-registration-link-to-register">
          Already registered?
          <LinkBase to="/login"> Sign In </LinkBase>
        </p>
      </div>
    </div>
  );
};
