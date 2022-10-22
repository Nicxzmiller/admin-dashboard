import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./screens/global/NavBar";
import Dashboard from "./screens/dashboard";
import SideBar from "./screens/SideBar";
// import  Team  from "./screens/team";
// import  Invoices  from "./screens/invoices";
// import  Contacts  from "./screens/contacts";
// import  Bar  from "./screens/bar";
// import  Form  from "./screens/form";
// import  Line  from "./screens/line";
// import  Pie  from "./screens/pie";
// import  FAQ  from "./screens/faq";
// import  Geography  from "./screens/geography";
// import  Calendar  from "./screens/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <SideBar />
          <main className="content">
            <NavBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
