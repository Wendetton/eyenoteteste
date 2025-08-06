import '../globals.css';

export const metadata = {
  title: 'Eyenote',
  description: 'Editor colaborativo de pacientes'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
