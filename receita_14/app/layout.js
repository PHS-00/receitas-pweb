// Tive que adicionar o root layout pois o servidor não mostrava a pagina.
// "type": "commonjs", // Precisei tirar la do packge.json pois coma a adição do root layout ela estava impatando a execução 
export const metadata = {
  title: 'Meu Projeto Next.js',
  description: 'Criado com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}