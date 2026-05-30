import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import BlogList from "./BlogList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
