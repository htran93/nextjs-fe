import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>web app</title>
      </Head>
      <div>This is navbar</div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
