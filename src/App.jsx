import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import Sidebar from "./Components/Sidebar";
import Transactions from "./Components/Transactions";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Overview />
      <Transactions />
    </>
  );
}

export default App;
