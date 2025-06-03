import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import SubmitPage from "./pages/SubmitPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="zawy3mh0z" data-path="src/App.tsx">
    <TooltipProvider data-id="ehcmxbvxa" data-path="src/App.tsx">
      <Toaster data-id="15szfad9a" data-path="src/App.tsx" />
      <BrowserRouter data-id="wsi3ohuys" data-path="src/App.tsx">
        <Routes data-id="skzoqlgbz" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="mwzl9w2cu" data-path="src/App.tsx" />} data-id="q5to0d1ct" data-path="src/App.tsx" />
          <Route path="/stories" element={<StoriesPage data-id="2vlspngyc" data-path="src/App.tsx" />} data-id="xj2i00ekr" data-path="src/App.tsx" />
          <Route path="/submit" element={<SubmitPage data-id="g1qaw3oj4" data-path="src/App.tsx" />} data-id="fhs9n9lbk" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="h1alnnuyk" data-path="src/App.tsx" />} data-id="w72a12za7" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;