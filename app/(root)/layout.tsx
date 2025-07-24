import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export default function PageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen flex-col">
      <Header></Header>
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
