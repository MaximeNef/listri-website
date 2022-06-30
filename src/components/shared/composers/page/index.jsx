export default function Page({ children, className = "" }) {
  return (
    <div className={`bg-[#F8F9FC] h-full flex flex-col w-screen ${className}`}>
      {children}
    </div>
  );
}
