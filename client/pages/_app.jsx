import Head from "next/head";
import CookieBanner from "../components/CookieBanner";
import Layout from "../components/Layout";
import "../public/govuk-frontend/all.scss";
import "../all.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>data.gov.uk</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <CookieBanner />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
