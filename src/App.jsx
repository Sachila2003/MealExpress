import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App({ children }) {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default App;