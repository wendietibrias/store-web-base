
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="@container bg-gray-100 w-full min-h-screen flex items-center justify-center">
       <div className="w-[50%] bg-white">
         {children}
       </div>
    </section>
  );
}
