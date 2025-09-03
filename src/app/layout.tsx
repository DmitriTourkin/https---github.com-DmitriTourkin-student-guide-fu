import "./globals.css";
import NavBar from "./components/navigation/Navigation/NavBar";
import PageHeader from "./components/PageHeader/PageHeader";
import styles from './components/navigation/Navigation/Navigation.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
          <NavBar/>
          <div className={styles.overlay}></div>
        <header className="">
          <PageHeader/>
        </header>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
