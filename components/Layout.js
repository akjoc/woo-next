import Head from "next/head";
import Header from "./Header";
// Import CSS directly in your component or page


const Layout = (props) => {
  return (
    <div>
      <Head>
        <title> Woocommere React App </title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        />
      </Head>
      <Header />
      <div className="product_section">
        <div className="container">
          {props.children}
        </div>
      </div>
      
    </div>
  );
};

export default Layout;
