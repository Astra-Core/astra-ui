import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useStyles from "../../styles/loginFormStyles";
import { apiClient } from "../../utils/apiClient";
import { LoginFormInputs } from "../../types/FormInputs";
import { useAuth } from "../../context/AuthContext";

const LoginForm: React.FC = () => {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { checkAuth } = useAuth();
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const body = new URLSearchParams();
      body.append("grant_type", "password");
      body.append("username", data.username);
      body.append("password", data.password);

      const response = await apiClient.post("/auth/token", body.toString(), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      document.cookie = `access_token=${response.data.access_token}`;
      await checkAuth();
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Incorrect username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Sign in to Astra
      </Typography>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={classes.form}
      >
        <TextField
          label="Username or email address"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
          slotProps={{
            input: {
              spellCheck: false,
              autoCorrect: "off",
            },
          }}
          error={!!errors.username}
          helperText={errors.username?.message}
          disabled={isLoading}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          disabled={isLoading}
        />
        <Link href="#" className={classes.forgotPassword}>
          Forgot password?
        </Link>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Sign in"
          )}
        </Button>
        <Typography align="center" className={classes.signup}>
          New to Astra? <Link href="#">Create an account</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default LoginForm;
