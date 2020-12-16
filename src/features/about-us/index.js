import { Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./AboutUs.styles";

export default function AboutUs() {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.root}>
      <Box className={classes.overlay}>
        <Container fixed className={classes.container} maxWidth="sm">
          <Typography gutterBottom component="h1" variant="h3">
            ABOUT US
          </Typography>
          <Typography variant="subtitle1" component="p" align="justify">
            Established in 2020, we are a discussion forum where users can post
            and scrutinize news articles and vote whether or not the news
            article in question is genuine.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            align="justify"
            gutterBottom
          >
            We are committed to tackling fake news and the spread of
            disinformation in society. Join us in helping to tackle this
            emerging (or we could say the always looming threat) to a peaceful
            and fulfilling life.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
