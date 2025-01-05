import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import useStyles from "../../styles/loginFormStyles";

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login Data: ", data);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Sign in to Astra
      </Typography>
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
