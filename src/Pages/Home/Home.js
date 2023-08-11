import { Helmet } from "react-helmet";
import Intro from "./Intro/Intro";
import Packaging from "./Packaging/Packaging";
import Items from "./Items/Items";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="shreyas" content="Place the meta description text here." />
        <title>KK</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Intro />
        <Packaging  />
        <Items   />
      </div>
    </>
  );
};
export default Home;
