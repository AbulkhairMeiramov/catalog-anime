import { useForm } from "react-hook-form";
import { styled, TextField, FormControl, Button } from "@mui/material";
import { getInputState } from "../utils/getInputState";
import {
  required,
  validatePassword,
  validateCPassword,
} from "../utils/validators";
import { useCallback } from "react";

const Wrapper = styled("form")`
  width: 400px;
  height: auto;
  border: 1px solid #c1c2c3;
  padding: 16px;
  border-radius: 4px;
  background: white;
  h4 {
    margin-top: 0;
  }
`;

export const RegistrationForm = ({ className, onUserCreated }) => {
  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("user")) || {},
  });

  const onSubmit = useCallback(
    (values) => {
      onUserCreated(values);
    },
    [onUserCreated]
  );

  return (
    <Wrapper className={className} onSubmit={handleSubmit(onSubmit)}>
      <h4>Registration</h4>
      <FormControl sx={{ width: "100%", mb: 1 }}>
        <TextField
          label="Last name"
          variant="outlined"
          {...register("lastName", { required: required() })}
          {...getInputState(formState, "lastName")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 1 }}>
        <TextField
          label="First name"
          variant="outlined"
          {...register("firstName", { required: required() })}
          {...getInputState(formState, "firstName")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 1 }}>
        <TextField
          label="E-mail"
          variant="outlined"
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
        <TextField
          label="Repeat password"
          variant="outlined"
          type="password"
          {...register("cPassword", {
            required: required(),
            validate: validateCPassword(getValues("password")),
          })}
          {...getInputState(formState, "cPassword")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 1 }}>
        <Button type="submit" variant="outlined">
          Register
        </Button>
      </FormControl>
    </Wrapper>
  );
};
