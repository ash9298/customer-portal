import React from "react";
import { Box, TextField, Divider } from "@mui/material";
import AuthLayout from "./AuthLayout";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "../../ui/Button";

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const { control, handleSubmit } = useForm<SignupFormValues>();

  const onSubmit = (data: SignupFormValues) => {
    console.log("Signup:", data);
  };

  return (
    <AuthLayout
      title="Leapwork invited you to make an account!"
      subtitle="Enter your account details."
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="First name"
              margin="normal"
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} fullWidth label="Last name" margin="normal" />
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} fullWidth label="Email" margin="normal" />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="password"
              label="Password"
              margin="normal"
            />
          )}
        />

        <PrimaryButton fullWidth type="submit" sx={{ mt: 3 }}>
          Sign up
        </PrimaryButton>
        <Divider sx={{ my: 2 }}>or</Divider>
        <PrimaryButton fullWidth type="submit">
          Sign up with SSO
        </PrimaryButton>
      </Box>
    </AuthLayout>
  );
};

export default SignupForm;
