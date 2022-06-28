import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { signInUser } from "../fetchers/signInUser";
import { setToken } from "../store/slice/auth";

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
          paddingTop: "18%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LoginForm onAuthSubmit={handleAuthSubmit} />
        <p style={{ textAlign: "left", color: "white" }}>
          No account?{" "}
          <Link
            to="/registration"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};
