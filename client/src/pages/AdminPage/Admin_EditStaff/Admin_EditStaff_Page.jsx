import { React } from "react";
import HeaderAdminComponent from "../../../components/HeaderAdminComponent/HeaderAdminComponent";
import EditStaff from "./EditStaff";
const AdminEditStaffPage = () => {
  return (
    <div>
      <HeaderAdminComponent />
      <div>
        <EditStaff />
      </div>
    </div>
  );
};

export default AdminEditStaffPage;
