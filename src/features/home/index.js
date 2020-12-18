import { Button, Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img from "../../assets/pexels-produtora-midtrack-3422053.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${img}) no-repeat center center/cover`,
    height: "100vh",
    position: "relative",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.73)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  container: {
    margin: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Box className={classes.overlay}>
        <Container className={classes.container} fixed>
          <Typography gutterBottom component="h1" variant="h3">
            Welcome To FNR Forum
          </Typography>
          <Typography variant="body1" gutterBottom>
            Register to create a new post or check out our public boards for the
            latest discussions.
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Register
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
