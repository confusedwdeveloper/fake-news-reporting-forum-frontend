import { Box, CircularProgress } from "@material-ui/core";
import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Home = lazy(() => import("../home"));
const NotFound = lazy(() => import("../404"));
const AboutUs = lazy(() => import("../about-us"));
const SignIn = lazy(() => import("../sign-in"));

const useStyles = makeStyles({
  main: {
    minHeight: "100vh",
    position: "relative",
  },
  spinner: {
    margin: "10% 50%",
  },
});

const Root = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main} component="main">
      <Navbar />
      <Suspense
        fallback={
          <CircularProgress className={classes.spinner} color="secondary" />
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Box>
  );
};

export default Root;
