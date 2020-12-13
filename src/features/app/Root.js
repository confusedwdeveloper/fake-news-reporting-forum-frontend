import { Container, Button } from "@material-ui/core";
import Navbar from "./Navbar";

const Root = () => (
  <>
    <Navbar />
    <Container component="main">
      <div>Hello world</div>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
    </Container>
  </>
);

export default Root;
