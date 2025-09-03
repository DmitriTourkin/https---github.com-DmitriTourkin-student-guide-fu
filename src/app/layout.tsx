import "./globals.css";
import NavBar from "./components/navigation/Navigation/NavBar";
import PageHeader from "./components/PageHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="header-container">
          <NavBar/>
          <PageHeader/>
        </div>
        {children}
      </body>
    </html>
  );
}
