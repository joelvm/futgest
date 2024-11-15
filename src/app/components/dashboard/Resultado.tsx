import { Typography } from "@mui/material"
import { Box } from "@mui/system"

type ResultadoProps = {
    equipa1: string
    equipa2: string
    golos1: number
    golos2: number
}

const Resultado = (props: ResultadoProps) => {
    return <Box sx={{ width: "100%" }} display={"flex"}>
    <Box display={"flex"} alignItems={"center"} sx={{ width: "50%" }} justifyContent={"end"}>
    <Typography color="textSecondary" fontWeight={500} sx={{ fontSize: "16px", textAlign: "end", mr: 1 }}>
        {props.equipa1}
    </Typography>
    <Typography variant="subtitle2" fontWeight={600} sx={{ fontSize: "18px", textAlign: "end", mr: 1 }}>
        {props.golos1}
    </Typography>
    </Box>

    <Box display={"flex"} alignItems={"center"}>
    <Typography color="textSecondary" sx={{ fontSize: "16px", }} fontWeight={600}> - </Typography>
    </Box>
        
    <Box display={"flex"} alignItems={"center"} sx={{ width: "50%", ml: 1 }} justifyContent={"start"}>
    <Typography variant="subtitle2" fontWeight={600} sx={{ fontSize: "18px", mr: 1 }}>
        {props.golos2}
    </Typography>
    <Typography color="textSecondary" fontWeight={500} sx={{ fontSize: "16px"}}>
        {props.equipa2}
    </Typography>
    </Box>
    </Box>
}

export default Resultado