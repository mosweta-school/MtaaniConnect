//This page is where the layout of the application will be implemented. It will include the navbar and footer components, as well as a main section for the content of the pages.
//This prevents the need to import the navbar and footer components in every page and allows for a consistent layout across the application.
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;