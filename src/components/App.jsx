import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useGlobalContext } from "./Context";

function App() {
  const {isDark} = useGlobalContext();
  return (
    <>
      <main
        className="main"
        style={{ backgroundColor: isDark ? '#FAFAFC' : '#0c0519', borderColor: isDark ? "#0c0519" : "#FAFAFC" }}
      >
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  )
}
export default App;