"use client"

import React from "react";
import {  Grid2 as Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { JogoDTO } from "@/lib/db/services/JogoRepository";

type UltimosJogosProps = {
  jogos?: JogoDTO[]
}


const UltimosJogos = ({ jogos }: UltimosJogosProps) => {
  
  return <Grid container spacing={3}>
  {jogos?.map((jogo, index) => (
    <Grid size={{ xs: 12, md: index > 0 ? 4 : 12 }} key={index}>
      <Card>
      <CardMedia
        sx={ index > 0 ? { height: { xs: 150, sm: 200, md: 250, lg: 150 }} : { height: { xs: 250, sm: 300, md: 400, lg: 350 }}}
        image={jogo.foto }
      />
      <CardContent>
        <Typography gutterBottom variant={ index > 0 ? "h6" : "h4" } component="div"> {jogo.equipa1} {jogo.golos1} - {jogo.golos2} {jogo.equipa2} </Typography>
        <Typography variant={ index > 0 ? "body2" : "body1" } sx={{ color: 'text.secondary' }}>{jogo.descricao}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mais</Button>
      </CardActions>
    </Card>
    </Grid>
  ))}
</Grid>
};

export default UltimosJogos;
