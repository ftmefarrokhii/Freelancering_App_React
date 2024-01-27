import { HiCollection, HiOutlineViewGrid ,HiCurrencyDollar , HiUser} from "react-icons/hi";
import Stat from '../../ui/Stat';

export default function Stats({users,proposals,projects}){
    
    return(
        <div className="grid grid-cols-3 gap-x-8">
            <Stat icon={<HiCollection className="w-20 h-20"/>} 
                  title="پروژه ها" 
                  value={projects}
                  color="green"
            />
            <Stat icon={<HiUser className="w-20 h-20"/>} 
                  title="کاربران" 
                  value={users}
                  color="orange"
            />
            <Stat icon={<HiOutlineViewGrid className="w-20 h-20"/>} 
                  title="درخواست ها"
                  value={proposals}
                  color="primary"
            />    
        </div>
    )
}