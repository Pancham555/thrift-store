import Footer from "@components/components/footer";
import { SidebarProvider } from "@components/components/sidebarContext";
import "@components/styles/globals.css";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Outfit } from "next/font/google";
import Navbar from "@components/components/navbar";
const Font = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SidebarProvider>
          <div className={Font.className}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </SidebarProvider>
      </PersistGate>
    </Provider>
  );
}
