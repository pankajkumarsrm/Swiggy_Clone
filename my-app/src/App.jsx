import Category from "./components/Category";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRest from "./components/TopRest";
import Footer from "./components/Footer";
import TopFooter from "./components/TopFooter";

function App() {
  return (
    <>
      <Header></Header>
      <Category />
      <TopRest />
      <OnlineDelivery/>

      <TopFooter />

      <Footer />
      {/* </Header> */}
    </>
  );
}

export default App;
