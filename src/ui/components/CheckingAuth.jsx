import { CircularProgress, Grid } from "@mui/material";
import React from "react";

export const CheckingAuth = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 4 }}
      />

      <Grid
        item
        sx={{
          width: { sm: 450 },
        }}
      />
      <CircularProgress color="warning" />
    </>
  );
};
