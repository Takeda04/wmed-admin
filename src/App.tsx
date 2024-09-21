//todo Import packages
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

//todo Import MUI Components
import { Box, Theme, ThemeProvider, createTheme } from "@mui/material";

//todo Import Higher-Order Component
const Private = lazy(() => import(`./routes/private`));

//todo Import Pages and Components
import { Loader } from "./components";
import { MySnackbar } from "./components";
import { ForgotPassword, Login, Register } from "./pages/auth";
const Error404 = lazy(() => import(`./pages/errors/error404`));
const Error500 = lazy(() => import(`./pages/errors/error500`));

//todo Import routes
import { routes } from "./routes/routes";

//todo Import utils
import { InterfaceStore } from "./utils";

function App() {
  const { mode } = useSelector((store: InterfaceStore) => store?.main);

  useEffect(() => {
    localStorage.setItem("theme", mode ? "dark" : "light");
  }, [mode]);

  const theme: Theme = createTheme(
    mode ? { palette: { mode: "dark" } } : { palette: { mode: "light" } }
  );

  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <Box className="w-full h-screen flex items-center justify-center">
            <Loader />
          </Box>
        }
      >
        <MySnackbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/500" element={<Error500 />} />
          <Route path="/*" element={<Error404 />} />

          {routes?.map(({ path, roles, component }) => (
            <Route
              key={v4()}
              path={path}
              element={<Private roles={roles} component={component} />}
            />
          ))}
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
