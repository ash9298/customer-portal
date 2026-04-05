import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import api from "../api";

interface User {
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const readString = (
  source: Record<string, unknown>,
  keys: string[]
): string | undefined => {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return undefined;
};

const normalizeUser = (
  payload: unknown,
  fallbackEmail?: string
): User | null => {
  if (!payload || typeof payload !== "object") {
    if (fallbackEmail) {
      return {
        email: fallbackEmail,
        name: fallbackEmail.split("@")[0],
      };
    }
    return null;
  }

  const root = payload as Record<string, unknown>;
  const nested =
    (root.user as Record<string, unknown> | undefined) ??
    (root.profile as Record<string, unknown> | undefined) ??
    (root.data as Record<string, unknown> | undefined) ??
    root;

  const email =
    readString(nested, ["email", "Email", "username", "userName", "UserName"]) ??
    fallbackEmail;
  if (!email) {
    return null;
  }

  const firstName = readString(nested, ["firstName", "FirstName"]);
  const lastName = readString(nested, ["lastName", "LastName"]);
  const joinedName = [firstName, lastName].filter(Boolean).join(" ").trim();
  const name =
    readString(nested, ["name", "Name", "fullName", "FullName"]) ??
    (joinedName.length > 0 ? joinedName : email.split("@")[0]);

  return {
    email,
    name,
    firstName,
    lastName,
  };
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const loginResponse = await api.post("/login", credentials, {
        withCredentials: true,
      });

      let user = normalizeUser(loginResponse.data, credentials.email);

      if (!user) {
        try {
          const profileResponse = await api.get("/profile", {
            withCredentials: true,
          });
          user = normalizeUser(profileResponse.data, credentials.email);
        } catch {
          // No-op: fallback user is created below.
        }
      }

      return (
        user ?? {
          email: credentials.email,
          name: credentials.email.split("@")[0],
        }
      );
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/profile", {
        withCredentials: true,
      });

      const user = normalizeUser(response.data);
      if (!user) {
        throw new Error("Authenticated profile payload missing user fields");
      }

      return user;
    } catch {
      return rejectWithValue(null);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticatedUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { setAuthenticatedUser, logout } = authSlice.actions;
export default authSlice.reducer;
