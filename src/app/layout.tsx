"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/layout/header/Header";
import PageContainer from "./components/container/PageContainer";

const MainWrapper = styled("body")(() => ({
  display: "flex",
  minHeight: "100vh"
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "20px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));


export default function RootLayout({ children }: { children: React.ReactNode; }) {

  const [mobileSidebarOpen, setMobileSidebarOpen ] = useState(false)

  return <html lang="pt">
    <PageContainer title="Fut. Quintas" description="this is Dashboard">
    <ThemeProvider theme={baselightTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <MainWrapper className="mainwrapper">
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper className="page-wrapper">
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Container
          sx={{
            maxWidth: "1200px !important",
          }}
        >
          {/* ------------------------------------------- */}
          {/* Header */}
          {/* ------------------------------------------- */}
          <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          <Box sx={{ minHeight: "calc(100vh - 170px)", py: 3  }}>
            {children}
          </Box>
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Container>
      </PageWrapper>
    </MainWrapper>
    </ThemeProvider>
    </PageContainer>
</html>
}