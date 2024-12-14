import { Toaster } from "./components/ui/toaster";

import PublicRouter from "./routes/public";

function App() {
  return (
    <>
      <PublicRouter />

      <Toaster />
    </>
  );
}

export default App;
