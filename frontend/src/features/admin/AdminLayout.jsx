import { HiCollection, HiHome , HiUser ,HiOutlineViewGrid } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavlink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";

export default function AdminLayout(){
    return(
        <AppLayout>
            <Sidebar>
            <CustomNavlink to="/admin/dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavlink>
                <CustomNavlink to="/admin/projects">
                    <HiOutlineViewGrid />
                    <span>پروژه ها</span>
                </CustomNavlink>
                <CustomNavlink to="/admin/proposals">
                    <HiCollection />
                    <span>درخواست ها</span>
                </CustomNavlink>
                <CustomNavlink to="/admin/users">
                    <HiUser />
                    <span>کاربران</span>
                </CustomNavlink>
            </Sidebar>
        </AppLayout>
    )
}