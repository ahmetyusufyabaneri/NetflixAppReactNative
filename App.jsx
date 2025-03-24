import Routes from "./src/routes/Routes";
import AppProvider from "./src/providers/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
