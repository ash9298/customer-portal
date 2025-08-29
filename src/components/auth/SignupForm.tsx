import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Divider, CircularProgress } from "@mui/material";
import AuthLayout from "./AuthLayout";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

type SignupFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type Payload = {
  LegacyId: string;
  Active: boolean;
  IsAdmin: false;
  UserType: string;
  LastActive: string;
  TwoFactorAuthEnabled: false;
  CustomerAccountId: string;
  ContactId: string;
};

const SignupForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<SignupFormValues>();
  const navigate = useNavigate();

  const onSubmit = async (data: SignupFormValues) => {
    setLoading(true);
    try {
      const payload: Payload = {
        ...data,
        LegacyId: `user-${data.email}`,
        Active: true,
        IsAdmin: false,
        UserType: "Customer",
        LastActive: new Date().toISOString(),
        TwoFactorAuthEnabled: false,
        CustomerAccountId: "CUST-004",
        ContactId: "CONT-004",
      };
      const response = await axios.post(
        "http://localhost:3000/signup",
        payload
      );
      console.log("Signup successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
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
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
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
