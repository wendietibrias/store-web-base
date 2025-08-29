
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="@container w-full min-h-screen flex items-center justify-center">
       <div className="w-[50%]">
         {children}
       </div>
    </section>
  );
}
