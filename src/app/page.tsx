import { Grid2 as Grid, Box } from '@mui/material';
// components
import UltimosJogos from '@/app/components/dashboard/UltimosJogos';
import MelhorMarcador from './components/dashboard/MelhorMarcador';
import MaisAssistencias from './components/dashboard/MaisAssistencias';
import { epocaScore } from '@/lib/db/services/EpocaRepository';
import { ultimosJogos } from '@/lib/db/services/JogoRepository';
import Score from './components/dashboard/Score';

export default async function Page() {
  const score = await epocaScore()
  const jogos = await ultimosJogos()
  const marcadores = []
  const assitencias = []

  return <Box>
    <Grid container spacing={2}>
      <Grid size={{xs: 12, md: 8}}>
        <UltimosJogos jogos={jogos}/>
      </Grid>
      <Grid size={{xs: 12, md: 4}}>
        <Grid container spacing={2}>
        <Grid size={{xs: 12}}>
            <Score score={score}/>
          </Grid>
          <Grid size={{xs: 12}}>
            <MelhorMarcador marcadores={marcadores}/>
          </Grid>
          <Grid size={{xs: 12}}>
            <MaisAssistencias assitencias={assitencias}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
}
