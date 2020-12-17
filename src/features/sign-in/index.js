import {
  Box,
  Button,
  TextField,
  Container,
  Typography,
  Paper,
  Link,
} from "@material-ui/core";
import { useStyles } from "./SignIn.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link as RouterLink } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Please enter a valid password"),
});

export default function SignIn() {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Box component="section" className={classes.root}>
      <Box className={classes.overlay}>
        <Container fixed className={classes.container} maxWidth="sm">
          <Paper className={classes.paper} elevation={20}>
            <Typography component="h2" variant="h4">
              SIGN IN
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <TextField
                margin="normal"
                fullWidth
                autoComplete="email"
                name="email"
                error={!!errors.email}
                id="signin-email"
                label="Email"
                defaultValue=""
                type="email"
                inputRef={register}
                helperText={errors.email?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                autoComplete="current-password"
                name="password"
                error={!!errors.password}
                id="signin-password"
                label="Password"
                defaultValue=""
                type="password"
                inputRef={register}
                helperText={errors.password?.message}
              />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign In
              </Button>
            </form>
            <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Link to="/" color="textSecondary" component={RouterLink}>
                Sign Up.
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
