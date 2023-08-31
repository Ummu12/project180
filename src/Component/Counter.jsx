import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Grid container spacing={3} align="center" sx={{ fontSize: 35 }}>
      <Grid item xs={3}>
        <Button
          onClick={() => setCount(count-1)}
          fullWidth
          variant="contained"
        >
          -
        </Button>
      </Grid>
      <Grid item xs={2}>
        {count}
      </Grid>
      <Grid item xs={3}>
        <Button
          onClick={() => setCount(count + 1)}
          fullWidth
          variant="contained"
        >
          +
        </Button>
      </Grid>

<Grid item xs={6}>
        <Button
          onClick={() => setCount(count + 5)}
          fullWidth
          variant="contained" color="secondary"
        > Add +5
        </Button>
      </Grid>
  
<Grid item xs={6}>
        <Button
          onClick={() => setCount(count - 5)}
          fullWidth
          variant="contained" color="secondary"
        > Remove -5
        </Button>
      </Grid>

    <Grid item xs={6} >
        <Button
         onClick={()=>setCount(count + 10)} 
         variant="contained" fullWidth > 
         ADD + 10
        </Button>
    </Grid>
      
        <Grid item xs={6}>
            <Button 
               onClick={()=>setCount(count - 10)}
               variant="contained" color="warning"
                fullWidth
               >
                Remove - 10

            </Button>

        </Grid>
    


    </Grid>
  );
};

