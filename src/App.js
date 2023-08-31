import React,{useState} from "react";
import { Card, CardContent,Grid } from "@mui/material";
import { Counter } from "./Component/Counter";

function App() {
  
  return (
    <Card>
       <CardContent>
        <h1>Counter</h1>
        <Counter/>
       </CardContent>
    </Card>
  );
}

export default App;
