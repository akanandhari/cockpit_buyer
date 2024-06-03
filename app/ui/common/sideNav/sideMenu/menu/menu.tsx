'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {propsType} from '../sidemenuprop';
const Menu=(props:propsType)=>{
// const router = useRouter();
  const currentPath = usePathname();

  return (
  <Link href={`${currentPath}${props.path}`}>
  <div className="flex my-2 cursor-pointer">
   <Image width={props.width?props.width:18} height={16} src={`/${props.icon}.svg`} alt={props.icon} className={`mr-1`}/>
  <span className={`text-sm align-bottom`}>{props.menu}</span>
  </div>
  </Link>);
}
export default Menu;