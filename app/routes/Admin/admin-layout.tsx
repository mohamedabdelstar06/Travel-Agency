import { MobileSidebar, NavItems } from "Components";
import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import Dashboard from "./dashboard";

const AdminLayout = () => {
  return (
    <div className="admin-layout flex">
      {/* Sidebar */}
      <MobileSidebar/>
     
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width="270px" enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
