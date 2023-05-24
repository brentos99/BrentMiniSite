import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
      <Header />
      <div className="mt-16 sm:mt-32">

        <div className="mt-16 sm:mt-20">{children}</div>
      </div>
      <Footer />
      </div>
    </>
  )
}
