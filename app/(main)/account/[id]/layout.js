// app/main/account/[id]/layout.js

export default function Layout({ children }) {
  return (
    <div className="px-1 md:px-4 lg:px-8 py-4">
      {children}
    </div>
  );
}
