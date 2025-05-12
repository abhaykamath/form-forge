import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Builder from "./pages/Builder.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import Demo from "./pages/Demo.tsx";
import YourForms from "./components/builder/YourForms.tsx";
import Templates from "./components/builder/Templates.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/app" element={<Builder />}>
            <Route path="" element={<Dashboard />} />
            <Route path="your-forms" element={<YourForms />} />
            <Route path="templates" element={<Templates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
