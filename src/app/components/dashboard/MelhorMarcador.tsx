import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";
import DashboardCard from "@/app/components/shared/DashboardCard";

export type MarcadorType = {
  nome: string
  equipa: string
  golos: number
}

type MelhorMarcadorProps = {
  marcadores: MarcadorType[]
}

export default function MelhorMarcador({ marcadores }: MelhorMarcadorProps) {
  return <DashboardCard title="Melhor Marcador">
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table sx={{ whiteSpace: "nowrap" }} >
            <TableBody>
              {marcadores.map((marcador) => (
                <TableRow key={marcador.nome}>
                  <TableCell sx={{ p:0, pt: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>{marcador.nome}</Typography>
                        <Typography color="textSecondary" sx={{ fontSize: "13px" }}>{marcador.equipa}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{marcador.golos}G</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </DashboardCard>
}