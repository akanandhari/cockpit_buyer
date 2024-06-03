import Image from 'next/image';
import {propsType} from '../sidemenuprop';
import Menu from './menu/menu';
const SideMenu=(props:propsType)=>
{
  return (
<div className={`flex flex-wrap items-center my-2 mx-3 w-full`}>
   {props.title && 
  <div className={`uppercase text-neutral-400 text-sm font-semibold w-full`}>{props.title}</div>}
   <Menu {...props}/>
</div>

  );
}
export default SideMenu;