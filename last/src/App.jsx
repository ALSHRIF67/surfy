import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* You can add shared header/nav here */}
      <Outlet />
    </div>
  );
}
