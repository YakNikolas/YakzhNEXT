import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Строй Магазин",
  description: "Made by Yakzhyk Mikolay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
