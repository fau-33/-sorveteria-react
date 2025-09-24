import "./globals.css";

export const metadata = {
  title: "Sorveteria ",
  description: "Sorveteria de qualidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
