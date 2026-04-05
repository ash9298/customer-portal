import React, { useState } from "react";
import { Box, CircularProgress, Divider, TextField } from "@mui/material";
import AuthLayout from "./AuthLayout";
import { Controller, useForm } from "react-hook-form";
import { PrimaryButton } from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { darkTokens } from "../../ui/theme";
import api from "../../api";

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

  const inputSx = {
    "& .MuiInputLabel-root": { color: darkTokens.text.secondary },
    "& .MuiOutlinedInput-root": {
      color: darkTokens.text.primary,
      backgroundColor: darkTokens.background.app,
      "& fieldset": { borderColor: darkTokens.border.default },
      "&:hover fieldset": { borderColor: darkTokens.text.secondary },
      "&.Mui-focused fieldset": { borderColor: darkTokens.accent.primary },
    },
  };

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
      await api.post("/signup", payload);
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
              sx={inputSx}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Last name"
              margin="normal"
              sx={inputSx}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              margin="normal"
              sx={inputSx}
            />
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
              sx={inputSx}
            />
          )}
        />

        <PrimaryButton fullWidth type="submit" sx={{ mt: 3 }}>
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
        </PrimaryButton>
        <Divider
          sx={{
            my: 2,
            borderColor: darkTokens.border.default,
            color: darkTokens.text.secondary,
          }}
        >
          or
        </Divider>
        <PrimaryButton fullWidth type="submit">
          Sign up with SSO
        </PrimaryButton>
      </Box>
    </AuthLayout>
  );
};

export default SignupForm;
