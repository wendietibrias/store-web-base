import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="@container flex flex-col justify-between min-h-screen">
      <Navbar />
        <main className="w-[85%] mx-auto mt-16">
          {children}
        </main>
      <Footer />
    </section>
  );
}
