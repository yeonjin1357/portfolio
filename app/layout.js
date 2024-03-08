import { Inter, Noto_Sans_KR } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_KR({ preload: false });

export const metadata = {
  title: "최연진 | YJ Resume | FrontEnd Developer",
  description: "최연진 | YJ Resume | FrontEnd Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${noto.className}`}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
