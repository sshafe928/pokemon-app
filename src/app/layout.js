import './globals.css';

export const metadata = {
  title: 'Pokémon Explorer',
  description: 'A simple Pokémon application using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}