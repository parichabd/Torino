import Layout from "@/Components/Layout/Layout";
import ReactQueryProvider from "@/Provider/ReactQueryProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ReactQueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactQueryProvider>
  );
}