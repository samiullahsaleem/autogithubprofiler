import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const [theme, setheme] = useState("react-dark")
  const themeC = (event) => {
    setheme(event.target.value)
  }
  const [atheme, asetheme] = useState("algolia")
  const athemeC = (event) => {
    asetheme(event.target.value)
  }
  return (
    <div >
      <h1 style={{ textAlign: "center" }}>👋 Welcome to Auto Awesome Github Profile Generator</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <TextField id="usernamename" name="usernamename" label="Github Username" variant="standard" defaultValue={"samiullahsaleem"} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Contribution Theme</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={theme}
                  label="Theme"
                  onChange={themeC}
                >
                  <MenuItem value={"react-dark"}>React Dark</MenuItem>
                  <MenuItem value={"cottoncandy"}>Cotton Candy</MenuItem>
                  <MenuItem value={"github"}>Github</MenuItem>
                  <MenuItem value={"xcode"}>Xcode</MenuItem>
                  <MenuItem value={"rogue"}>Rogue</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="Github Activity Theme">Github Activity Theme</InputLabel>
                <Select
                  labelId="Github Activity Theme"
                  id="Github Activity Theme Select"
                  value={atheme}
                  label="Theme"
                  onChange={athemeC}
                >
                  <MenuItem value={"algolia"}>Algolia</MenuItem>
                  <MenuItem value={"merko"}>Merko</MenuItem>
                  <MenuItem value={"dark"}>Dark</MenuItem>
                  <MenuItem value={"radical"}>Radical</MenuItem>
                  <MenuItem value={"rogue"}>Rogue</MenuItem>
                  <MenuItem value={"gruvbox"}>Gruvbox</MenuItem>
                  <MenuItem value={"tokyonight"}>Tokyonight</MenuItem>
                  <MenuItem value={"onedark"}>Onedark</MenuItem>
                  <MenuItem value={"synthwave"}>Synthwave</MenuItem>
                  <MenuItem value={"highcontrast"}>HighContrast</MenuItem>
                  <MenuItem value={"dracula"}>Dracula</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <br />
      <br />
      <Button variant="contained" onClick={graphC}>Click Here</Button>
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item style={{ backgroundColor: "black", color: "white" }}>
              <h3>🫵 Github Profile View</h3>
              <h3>Contribution Graph</h3>
              <img height="180em" width="100%" alt="Browser doesn't support" src={`https://activity-graph.herokuapp.com/graph?username=${username}&theme=${theme}`} />
              <br />
              <h3>⚙️ GitHub Analytics</h3>
              <img height="180em" width="100%" alt="Browser doesn't support or Username not found" src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${atheme}&include_all_commits=true&count_private=true `} />
              <br />
              <img height="180em" width="100%" alt="Browser doesn't support or Username not found" src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=${atheme}`} />
              <br />
              <img width="50%" alt="Browser doesn't support or Username not found" src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&show_icons=true&locale=en&layout=demo&theme=merko&hide_border=true`} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item style={{ backgroundColor: "black", color: "white" }}>
              <h3>💻Code</h3>
              <div id="codedata">
                {`## Contribution Graph`}
                <br />
                {`[![${username}'s GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=${username}&theme=${theme})](https://github.com/${username})`}
                <br />
                {`<h2><i>⚙️ GitHub Analytics</i></h2>`}
                <br />
                {`<p align="center">`}
                <br />
                {`<img height="180em" src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${atheme}&include_all_commits=true&count_private=true"/>`}
                <br />
                {`<img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=${atheme}" />`}
                <br />
                {`<img width="90%" src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&show_icons=true&locale=en&layout=demo&theme=merko&hide_border=true" />`}
              </div>
            </Item>
          </Grid>
        </Grid >
      </Box >
      <Box mt="80px" bgcolor="#FFF3F4">
        <Typography variant="h4" sx={{ fontSize: { lg: '28px', xs: '20px' }, color: "white", backgroundColor: "black", pb: "3px" }} textAlign="center" pb="40px">Made with ❤️ by Sami Ullah Saleem</Typography>
      </Box>
    </div >
  );
}

export default App;
