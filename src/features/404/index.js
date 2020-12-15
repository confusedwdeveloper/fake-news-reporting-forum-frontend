import { Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardBackspace } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    maxHeight: "100vh",
    paddingTop: "30vh",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1.5rem",
  },
});

export default function NotFoundPage() {
  const history = useHistory();

  const classes = useStyles();
  return (
    <Container className={classes.container} fixed component="section">
      <Typography variant="h2" component="h1" gutterBottom>
        Page not found :(
      </Typography>
      <Typography variant="body1" gutterBottom>
        Maybe the page you are looking for has been removed, or you typed in the
        wrong URL.
      </Typography>
      <Button
        onClick={() => history.replace("/")}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardBackspace />}
      >
        Go Back
      </Button>
    </Container>
  );
}
