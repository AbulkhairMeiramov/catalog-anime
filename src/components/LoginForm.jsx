import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { getInputState } from "../utils/getInputState";
import { required, validatePassword } from "../utils/validators";
import { styled } from "@mui/material";
import { TextField, FormControl, Button } from "@mui/material";

const LoginWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  border: 1px solid #c1c2c3;
  height: auto;
  border-radius: 4px;
  padding: 16px;
  width: 400px;
`;

export const LoginForm = ({ onAuthSubmit }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("user")) || {},
  });

  const onSubmit = useCallback(
    (values) => {
      onAuthSubmit(values);
    },
    [onAuthSubmit]
  );

  return (
    <LoginWrapper>
      <h3>Please Log In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ width: "100%", mb: 1 }}>
          <TextField
            label="E-mail"
            variant="outlined"
            type="text"
            {...register("email", { required: required() })}
            {...getInputState(formState, "email")}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 1 }}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            {...register("password", {
              required: required(),
              validate: validatePassword,
            })}
            {...getInputState(formState, "password")}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 1 }}>
          <Button type="submit" variant="outlined">
            Login
          </Button>
        </FormControl>
      </form>
    </LoginWrapper>
  );
};
LoginForm.propTypes = {
  onAuthSubmit: PropTypes.func.isRequired,
};
