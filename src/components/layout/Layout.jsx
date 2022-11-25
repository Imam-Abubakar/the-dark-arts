import { Helmet } from "react-helmet";
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
       
        <meta charset="utf-8" />
        <title>
        The Dark Arts - Metaverse NFT Collection {" "}
        </title>
        <meta name="description" content="" />
       
        <meta httpEquiv="x-ua-compatible" content="ie=edge" /> 
        
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>  
      {children} 
    </>
  );
};

export default Layout;
