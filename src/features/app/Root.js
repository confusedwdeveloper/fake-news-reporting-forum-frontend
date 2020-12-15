import { Box, CircularProgress } from "@material-ui/core";
import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    minHeight: "100vh",
    position: "relative",
  },
  spinner: {
    margin: "10% 50%",
  },
});

const Home = lazy(() => import("../home"));

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
        <Route path="/" component={Home} />
      </Suspense>
    </Box>
  );
};

export default Root;
