import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthLayout from "./AuthLayout";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm<LoginFormValues>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login:", data);
    const isAuthenticated = data.email === "admin" && data.password === "admin";

    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <AuthLayout
      title="Log in to Customer Portal"
      subtitle="New to Customer Portal? Contact our Customer Success Team for support."
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <PrimaryButton fullWidth type="submit" sx={{ mt: 3 }}>
          Sign in
        </PrimaryButton>

        <Divider sx={{ my: 2 }}>or</Divider>
        <PrimaryButton fullWidth>Use SSO</PrimaryButton>
      </Box>
    </AuthLayout>
  );
};

export default LoginForm;
