import GlobalStyles, {Container} from "./globalStyles";
import Header from "./components/main-header/Header";
import Navbar from "./components/main-nav/Navbar";
import Content from "./components/main-content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Navbar />
        <Content />
        <Footer />
      </Container>
    </>
  );
}

export default App;
