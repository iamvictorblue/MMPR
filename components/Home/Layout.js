import Nav from "../Nav";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="relative isolate bg-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/proceres7.png')", opacity: 0.1 }}
      ></div>
      <Nav animate={true} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
