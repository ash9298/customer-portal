import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
// import { useDispatch } from "react-redux";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthLayout from "./AuthLayout";
import { PrimaryButton } from "../../ui/Button";
// import { login } from "../../store/authSlice";
// import { type AppDispatch } from "../../store";
interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      // const result = await dispatch(login(data));
      // if (login.fulfilled.match(result)) {
      if (data.email === "admin" && data.password === "admin") {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
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
          {loading ? <CircularProgress size={24} color="inherit" /> : "Log In"}
        </PrimaryButton>

        <Divider sx={{ my: 2 }}>or</Divider>
        <PrimaryButton fullWidth>Use SSO</PrimaryButton>
      </Box>
    </AuthLayout>
  );
};

export default LoginForm;
