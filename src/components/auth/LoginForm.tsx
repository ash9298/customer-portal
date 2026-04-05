import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import AuthLayout from "./AuthLayout";
import { PrimaryButton } from "../../ui/Button";
import { isMsalConfigured, loginRequest } from "../../auth/msalConfig";
import { darkTokens } from "../../ui/theme";
import { login } from "../../store/authSlice";
import { type AppDispatch, type RootState } from "../../store";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ssoLoading, setSsoLoading] = useState(false);

  const { control, handleSubmit } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { instance } = useMsal();
  const isMsalAuthenticated = useIsAuthenticated();
  const isStoreAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const authError = useSelector((state: RootState) => state.auth.error);

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

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      const result = await dispatch(login(data));
      if (login.fulfilled.match(result)) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMsalAuthenticated || isStoreAuthenticated) {
      navigate("/dashboard");
    }
  }, [isMsalAuthenticated, isStoreAuthenticated, navigate]);

  const handleSsoLogin = async () => {
    if (!isMsalConfigured) {
      console.warn("SSO is not configured. Missing VITE_AZURE_AD_CLIENT_ID.");
      return;
    }
    setSsoLoading(true);
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("SSO login error:", error);
      setSsoLoading(false);
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
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              sx={inputSx}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: darkTokens.text.secondary }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        {authError && (
          <Typography
            sx={{
              mt: 1,
              fontSize: "12px",
              color: darkTokens.status.dangerSoft,
            }}
          >
            {authError}
          </Typography>
        )}

        <PrimaryButton fullWidth type="submit" sx={{ mt: 3 }}>
          {loading ? <CircularProgress size={24} color="inherit" /> : "Log In"}
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
        <PrimaryButton
          fullWidth
          onClick={handleSsoLogin}
          disabled={ssoLoading || !isMsalConfigured}
        >
          {ssoLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Use SSO"
          )}
        </PrimaryButton>
      </Box>
    </AuthLayout>
  );
};

export default LoginForm;
