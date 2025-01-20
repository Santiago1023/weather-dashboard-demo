import './globals.css'; // Estilos globales
import SideBar from './components/SideBar'; // Importa el Sidebar
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: "Weather Dashboard App",
  description: "An application for weather tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen w-screen bg-gray-50 text-gray-800">
        <SideBar/>
        <ToastContainer />
        <main className="flex w-screen items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
