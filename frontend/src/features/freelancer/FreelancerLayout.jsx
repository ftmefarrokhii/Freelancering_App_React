

import { HiCollection, HiHome } from 'react-icons/hi'
import AppLayout from '../../ui/AppLayout'
import CustomNavlink from '../../ui/CustomNavlink'
import Sidebar from '../../ui/Sidebar'

export default function FreelancerLayout(){
    return(
        <AppLayout>
            <Sidebar>
                <CustomNavlink to="dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavlink>
                <CustomNavlink to="projects">
                    <HiCollection />
                    <span>پروژه ها</span>
                </CustomNavlink>
                <CustomNavlink to="proposals">
                    <HiCollection />
                    <span>درخواست ها</span>
                </CustomNavlink>
            </Sidebar>   
        </AppLayout>
    )
}