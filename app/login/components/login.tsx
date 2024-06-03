import Image from 'next/image';
import styles from './comp.module.css';
const Login=()=>
{
return (
  <div className="flex flex-wrap justify-center">
  <h3 className={`${styles['each_item']}`}> <b>Login</b> with your Renault Group IPN.</h3>
      <div className={`${styles['each_item']} flex flex-wrap ${styles.banner}` }>
    <Image
              src="/globe.svg"
              alt="globe"
             className="mr-2"
              width={40}
              height={24}
            />   
            <span>
              Your Cockpit will be customized <br/>with the scope of your letter
            </span>
            
             </div>
             <div className={styles.each_item}>
               <label >IPN
            <input className={`${styles.input} py-1 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400`} type="text"/>
            </label>
             </div>
             <div className={styles.each_item}>  <button className=" py-1 text-indigo-600 font-semibold bg-indigo-400 border border-indigo-300 text-white hover:text-white hover:bg-indigo-600 drop-shadow-md  hover:border-transparent focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-offset-1 w-full">Login</button></div>
            
  </div>
);
}
export default Login;