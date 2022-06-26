import { useState } from 'react';
import {TextField,Button} from '@mui/material'

function App() {
  const [cgraph, setgraph] = useState('samiullahsaleem');
  const graphC = ()=>{
    let val = document.getElementById("cgraphname").value;
    console.log(val);
    return setgraph(val);
  }
  return (
    <div >
      <h1 style={{ textAlign: "center" }}>Welcome to Auto Awesome Github Profile Generator</h1>
      <TextField id="cgraphname" name="cgraphname" label="Github Username" variant="standard" defaultValue={"samiullahsaleem"}/>
      <br/>
      <Button variant="contained" onClick={graphC}>Click Here</Button>
      <br/>
      <h3>Contribution Graph</h3>
      <img height="180em" alt="Browser doesn't support" src={`https://activity-graph.herokuapp.com/graph?username=${cgraph}&theme=xcode`} />
      <br/>
      <h3>⚙️ GitHub Analytics</h3>
      <img height="180em" width="25%" alt="Browser doesn't support or Username not found" src={`https://github-readme-stats.vercel.app/api?username=${cgraph}&show_icons=true&theme=algolia&include_all_commits=true&count_private=true `} />
      <img height="180em" width="15%" alt="Browser doesn't support or Username not found" src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${cgraph}&layout=compact&langs_count=8&theme=algolia`}/>
      <br />
      <img width="50%" alt="Browser doesn't support or Username not found" src={`https://github-readme-streak-stats.herokuapp.com/?user=${cgraph}&show_icons=true&locale=en&layout=demo&theme=merko&hide_border=true`} />
    </div>
  );
}

export default App;
