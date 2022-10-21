import requestRoute from "../pages/requests/route";
import dashboardRoute from "../pages/dashboard/route";
import memberRoute from "../pages/members/route";
import addMemberRoute from "../pages/add_member/route"
import permissionRoute from "../pages/permissions/route"
import roleRoute from "../pages/roles/route"

const route = [
    dashboardRoute,
    memberRoute,
    requestRoute,
    addMemberRoute,
    roleRoute,
    permissionRoute
];

export default route;