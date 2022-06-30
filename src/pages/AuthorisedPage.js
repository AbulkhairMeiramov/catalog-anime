import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserData } from "../fetchers/getUserData";
import { setCurrentUser, setToken } from "../store/slice/auth";

export const AuthorisedPage = ({ children }) => {
  const { token, currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData(token)
      .then((data) => {
        dispatch(setCurrentUser(data.users[0]));
      })
      .catch(() => {
        let y;
        if (y) {
          dispatch(setToken(null));
        }
      });
  }, [token, dispatch]);

  if (token && !currentUser) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress style={{ color: "green" }} />
      </div>
    );
  }

  if (token && currentUser) {
    return children;
  }

  return <Navigate to="/login" />;
};
