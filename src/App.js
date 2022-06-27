import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  const [username, setUsername] = useState('samiullahsaleem');
  const graphC = () => {
    let val = document.getElementById("usernamename").value;
    return setUsername(val);
  }
  return (
    <div >
      <h1 style={{ textAlign: "center"}}>👋 Welcome to Auto Awesome Github Profile Generator</h1>
      <TextField id="usernamename" name="usernamename" label="Github Username" variant="standard" defaultValue={"samiullahsaleem"} />
      <br />
      <br />
      <Button variant="contained" onClick={graphC}>Click Here</Button>
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item style={{backgroundColor: "black", color: "white"}}>
              <h3>🫵 Github Profile View</h3>
              <h3>Contribution Graph</h3>
              <img height="180em" width="100%" alt="Browser doesn't support" src={`https://activity-graph.herokuapp.com/graph?username=${username}&theme=xcode`} />
              <br />
              <h3>⚙️ GitHub Analytics</h3>
              <img height="180em" width="100%"  alt="Browser doesn't support or Username not found" src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=algolia&include_all_commits=true&count_private=true `} />
              <br />
              <img height="180em" width="100%"  alt="Browser doesn't support or Username not found" src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=algolia`} />
              <br />
              <img width="50%" alt="Browser doesn't support or Username not found" src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&show_icons=true&locale=en&layout=demo&theme=merko&hide_border=true`} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item style={{backgroundColor: "black", color: "white"}}>
              <h3>💻Code</h3>
              <div id="codedata"> 
                {`## Contribution Graph`}
                <br />
                {`[![${username}'s GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=${username}&theme=rogue)](https://github.com/${username})`}
                <br />
                {`<h2><i>⚙️ GitHub Analytics</i></h2>`}
                <br />
                {`<p align="center">`}
                <br />
                {`<img height="180em" src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"/>`}
                <br />
                {`<img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=algolia" />`}
                <br />
                {`<img width="90%" src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&show_icons=true&locale=en&layout=demo&theme=merko&hide_border=true" />`}
              </div>
            </Item>
          </Grid>
        </Grid >
      </Box >
      <Box mt="80px" bgcolor="#FFF3F4">
    <Typography variant="h4" sx={{ fontSize: { lg: '28px', xs: '20px' }, color: "white", backgroundColor: "black", pb:"3px"}}textAlign="center" pb="40px">Made with ❤️ by Sami Ullah Saleem</Typography>
  </Box>
    </div >
  );
}

export default App;
