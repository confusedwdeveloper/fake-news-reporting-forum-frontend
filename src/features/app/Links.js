import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Links() {
  const history = useHistory();

  return (
    <>
      <Button onClick={() => history.push("/")} color="inherit">
        Home
      </Button>
      <Button onClick={() => history.push("/about-us")} color="inherit">
        About Us
      </Button>
      <Button color="inherit">Public Board</Button>
      <Button color="inherit">Login</Button>
    </>
  );
}
