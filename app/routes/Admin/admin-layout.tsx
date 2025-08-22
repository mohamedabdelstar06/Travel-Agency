import {Outlet} from "react-router";
const AdminLayout = () => {
  return (
    <div className ="admin-layout">
         MobileSider
    <aside className="w-full max-w-[270px] hidden lg:block">Sidbar</aside>
    <aside className="children">

        <Outlet/>
    </aside>
    </div>
   
  )
}

export default AdminLayout

