import Router from "./router/Router";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
  }
  return <Router />;
}

export default App;
