import { Header } from "Components";
import { ColumnsDirective, ColumnDirective, GridComponent } from "@syncfusion/ej2-react-grids";
import { cn, formatDate } from "~/lib/utils";
import { getAllUsers } from "~/appwrite/auth";
import type { Route } from "./+types/all-users";

export const loader = async () => {
    const { users, total } = await getAllUsers(10, 0);
    return { users, total }
}

const AllUsers = ({ loaderData }: Route.ComponentProps) => {
    const { users } = loaderData;
    return (
        <main className="all-users wrapper">
            <Header
                title="Manage Users"
                description="Filter, sort ,and access datailed user Profiles"
            />

            <GridComponent dataSource={users} gridLines="None">
                <ColumnsDirective>
                    <ColumnDirective
                        field="name"
                        headerText="Name"
                        width="200"
                        textAlign="Left"
                        template={(props: UserData) => (
                            <div className="flex items-center gap-1.5 px-4">
                                <img
                                    src={props.imageUrl || "assets/images/default-image.jpg"}
                                    alt=""
                                    className="rounded-full size-8 aspect-square"
                                    onError={(e) => {
                                        e.currentTarget.src = "assets/images/default-image.jpg";
                                    }}
                                />
                                <h2>{props.name}</h2>
                            </div>
                        )}
                    >
                    </ColumnDirective>

                    <ColumnDirective
                        field="email"
                        headerText="Email Address"
                        width="200"
                        textAlign="Left"
                    >
                    </ColumnDirective>
                    <ColumnDirective
                        field="joinedAt"
                        headerText="Date Joined"
                        width="140"
                        textAlign="Left"
                        template={({joinedAt}: {joinedAt:string}) => formatDate(joinedAt)}
                    >
                    </ColumnDirective>

                    <ColumnDirective
                        field="status"
                        headerText="Type"
                        width="100"
                        textAlign="Left"
                        template={({ status }: UserData) => (
                            <article className={cn('status-column', status === 'user' ? 'bg-success-50' : 'bg-light-300')}>
                                <div className={cn('size-2 rounded-full', status === 'user' ? 'bg-success-500' : 'bg-gray-500')} />

                                <h3 className={cn('font-inter text-xs font-medium', status === 'user' ? 'text-success-700' : 'text-gray-500')}>
                                    {status}
                                </h3>

                            </article>
                        )}
                    />
                </ColumnsDirective>

            </GridComponent>
        </main>
    )
}
export default AllUsers;