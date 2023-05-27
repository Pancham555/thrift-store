import Footer from "@components/components/footer";
import { SidebarProvider } from "@components/components/sidebarContext";
import "@components/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
      <Footer />
    </SidebarProvider>
  );
}
