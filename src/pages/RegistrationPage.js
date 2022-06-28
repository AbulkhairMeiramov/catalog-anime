import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationForm } from "../components/RegistrationForm";
import { signUpUser } from "../fetchers/signUpUser";
import { setToken } from "../store/slice/auth";

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
    <div
      style={{
        backgroundImage: `url(https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_white-1.png)`,
        backgroundColor: "green",
        overFlow: "auto",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <div
        style={{
          paddingTop: "14%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <RegistrationForm onUserCreated={handleUserCreated} />
        <p style={{ textAlign: "left", color: "white" }}>
          Already registered?{" "}
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
