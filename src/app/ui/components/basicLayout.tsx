import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
