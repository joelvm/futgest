import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Typography
} from "@mui/material";

// components
import Profile from "./Profile";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

/* interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
} */

/* const Header = ({ toggleMobileSidebar }: ItemType) => { */
const Header = () => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    borderRadius: 13,
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default" sx={{mt: 1}}>
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          /* onClick={toggleMobileSidebar} */
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>
        
        <Box px={2} sx={{ display: 'flex', alignContent: "start" }}>
          <Link href="/">
            <Image alt='logo' src="/images/logos/logo.webp" width={51} height={35} style={{ objectFit: 'cover', maxHeight: '35px' }}></Image>
          </Link>
          <Typography variant="h3" sx={{ mx: 1, mt: 0.5, color: '#0085db' }}>Futebol às quintas</Typography>
        </Box>
        <Box px={2}>
        </Box>

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
          </Box>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
}
export default Header;
