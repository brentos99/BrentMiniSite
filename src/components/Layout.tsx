import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-zinc-900">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
