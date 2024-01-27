import { HiCollection, HiHome } from 'react-icons/hi'
import AppLayout from '../../ui/AppLayout'
import CustomNavlink from '../../ui/CustomNavlink'
import Sidebar from '../../ui/Sidebar'

export default function OwnerLayout(){
    return(
        <AppLayout>
            <Sidebar>
                <CustomNavlink to="/owner/dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavlink>
                <CustomNavlink to="/owner/projects">
                    <HiCollection />
                    <span>پروژه ها</span>
                </CustomNavlink>
            </Sidebar>   
        </AppLayout>
    )
}