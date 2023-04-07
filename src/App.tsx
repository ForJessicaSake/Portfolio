import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className=" bg-background">
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
