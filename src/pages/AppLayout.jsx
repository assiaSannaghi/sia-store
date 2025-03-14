import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <main className="mb-16">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
