import { makeStyles } from "@material-ui/core/styles";
import img from "./pexels-produtora-midtrack-3422053.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${img}) no-repeat center center/cover`,
    height: "100vh",
    position: "relative",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
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
    // justifyContent: "center",
    paddingTop: 120,
    textAlign: "center",
    alignItems: "center",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  paper: {
    width: "100%",
    padding: "1rem 0.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));
export { useStyles };
