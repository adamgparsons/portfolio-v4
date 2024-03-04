import { Layout } from "../src/components";
import type { AppProps } from "next/app";

import "@/styles/fonts.css";
import "./layout.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pageTitle = "Default Title", ...restPageProps } = pageProps;

  return (
    <Layout pageTitle={pageTitle}>
      <Component {...restPageProps} />
    </Layout>
  );
};

export default MyApp;
