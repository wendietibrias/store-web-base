
export default function RootLayout({
    children 
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <div className="w-[20rem] p-3">
                {children}
            </div>
        </section>
    )
}