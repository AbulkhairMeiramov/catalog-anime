import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { signInUser } from "../fetchers/signInUser";
import { setToken } from "../store/slice/auth";
import { LinkBase } from "../components/styles/LinkBase";

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
        backgroundColor: "#388e3c",
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
          justifyContent: "center",
        }}
      >
        <LoginForm onAuthSubmit={handleAuthSubmit} />
        <p style={{ textAlign: "left", color: "white" }}>
          No account?
          <LinkBase to="/registration"> Create one </LinkBase>
        </p>
      </div>
    </div>
  );
};
