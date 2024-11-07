import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import MainRouter from "./routes";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <NavBar />
        <MainRouter />
      </div>
    </ErrorBoundary>
  );
}

export default App;
