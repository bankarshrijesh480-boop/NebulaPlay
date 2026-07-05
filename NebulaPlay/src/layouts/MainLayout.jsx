export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {children}
    </div>
  );
}