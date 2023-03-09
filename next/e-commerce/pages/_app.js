import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Layout from "./Layout";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout />
      <Component {...pageProps} />
    </Provider>
  );
}