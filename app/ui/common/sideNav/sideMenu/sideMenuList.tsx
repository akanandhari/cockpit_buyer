
import {sidemenuList} from './sidemenuprop';
import SideMenu from './sideMenu';

const  SideMenuList=()=>{
 let sidebarlist=
  [
   ...sidemenuList
  ];
  return (
 <div className={`flex flex-wrap justify-center`}>
              {sidebarlist.map((item)=>{return (
                 
                <SideMenu {...item}/>
                
              )})}
        </div>    

  );
}
export default SideMenuList;