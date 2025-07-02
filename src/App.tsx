import AppHeader from "./components/AppHeader";
import Toolbar from "./components/Toolbar";
import Spreadsheet from "./components/Spreadsheet";
import BottomTabs from "./components/BottomTabs";

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <AppHeader />
    <Toolbar />
    <div className="overflow-x-auto overflow-y-scroll">
      <Spreadsheet />
    </div>
    <BottomTabs />
  </div>
);

export default App;
