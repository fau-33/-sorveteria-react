import Topo from "@/componentes/Topo";
import "./globals.css";
import Rodape from "@/componentes/Rodape";

export const metadata = {
  title: "Sorveteria ",
  description: "Sorveteria de qualidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
