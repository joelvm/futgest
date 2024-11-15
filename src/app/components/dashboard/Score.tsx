import { Box } from "@mui/material";
import DashboardCard from "@/app/components/shared/DashboardCard";
import Resultado from "./Resultado";

export type ScoreType = {
  epoca: string
  equipa1: string
  equipa2: string
  resultado1: number
  resultado2: number
}

type ScoreProps = {
  score: ScoreType
}

export default function Score({
  score,
}: ScoreProps) {
  return  <DashboardCard title={`Score ${score.epoca}` }>
      <Box sx={{ overflow: "auto" }} >
        <Resultado equipa1={score.equipa1} equipa2={score.equipa2} golos1={score.resultado1} golos2={score.resultado2}/>
      </Box>
    </DashboardCard>
}