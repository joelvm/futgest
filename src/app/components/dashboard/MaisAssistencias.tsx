import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";
import DashboardCard from "@/app/components/shared/DashboardCard";

export type AssistenciaType = {
  nome: string
  equipa: string
  golos: number
}

type MelhorMarcadorProps = {
  assitencias: AssistenciaType[]
}

export default function MelhorMarcador({ assitencias }: MelhorMarcadorProps) {
  return <DashboardCard title="Mais Assistências">
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table sx={{ whiteSpace: "nowrap" }} >
            <TableBody>
              {assitencias.map((a) => (
                <TableRow key={a.nome}>
                  <TableCell sx={{ p:0, pt: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>{a.nome}</Typography>
                        <Typography color="textSecondary" sx={{ fontSize: "13px" }}>{a.equipa}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{a.golos}A</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </DashboardCard>
}