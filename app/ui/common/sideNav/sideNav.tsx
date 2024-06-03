
import styles from './sidenav.module.css';
import Image from 'next/image';
import SideMenuList from './sideMenu/sideMenuList';
import Logo from '../logo/logo';
const SideNav=()=>{  
  return (
  <>
  <div className={`shadow-neutral-400 shadow-md divide-y divide-neutral-400/25  ${styles.sidebar}`}>   
       <Logo/>    
      <SideMenuList/> 
  </div>
  </>);
}

export default SideNav;