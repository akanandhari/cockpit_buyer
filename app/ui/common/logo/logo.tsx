import Image from 'next/image';
import styles from './logo.module.css';
export default function Logo()
{
  return (
    <div className={`${styles.logo} flex flex-wrap justify-center items-center`}>
  <div className={`flex flex-wrap justify-center items-center`}>
 <Image
              src="/logoblack.svg"
              alt="logo"
             className="mr-2"
              width={28}
              height={24}
            />  <span className={`text-2xl font-bold`}> Buyer's Cockpit</span> 
             <span className={`text-xs `}> Powered by <b>RGP</b></span> 
            </div>
            </div> );
}