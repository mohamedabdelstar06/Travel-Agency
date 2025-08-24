import { MobileSidebar, NavItems } from "Components";
import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import Dashboard from "./dashboard";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader(){
  try{
    const user = await account.get();
    if(!user.$id) return redirect ('/sign-in');

    const existingUser = await getExistingUser(user.$id);
    if(existingUser?.status ==='user'){
      return redirect('/');
    }
    return existingUser?.$id ? existingUser :await storeUserData()
  }
  catch(e){
  console.log('Error in client loader', e);
}
return redirect('/sign-in');
}
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
