import Image from 'next/image';
import styles from './login.module.css';
import { list } from 'postcss';
import Login from './components/login';
export default function LoginPage() {
  let pcList = [
    'Performance review',
    'Activity monitoring',
    'Supplier risk quotation',
    'Technology Watch',
    'Simulations',
  ];
  return (
    <div className={`${styles['login-container']} shadow-md z:3`}>
      <div
        className={`${styles['login-item']} ${styles['login-poster']} drop-shadow-md z:10 flex flex-col flex-wrap justify-center items-center m-10`}
      >
        <div
          className={`flex ${styles.logo} ${styles['fiftyWidth']} p-2 rounded-md shadow-md flex-wrap justify-center  basis-1 `}
        >
          <div className="flex flex-wrap justify-center flex-col m-3">
          <p className={`${styles['logo-font']} flex flex-wrap `}>
            <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={40}
              height={24}
            />
            Buyer's Cockpit
          </p>
          <p className="self-end">
            Powered by <b>RGP</b>
          </p>
          </div>
        </div>
        <div className={`${styles['fiftyWidth']}`}>
          <b>Save your precious time</b> with a{' '}
          <b>unique access to procurement</b> data, while performing a varity of
          tasks:
          <div className={`flex flex-wrap flex-row`}>
            {pcList.map((item) => {
              return <div className={`${styles['list-item']}`}>{item}</div>;
            })}
           
            <span className={`${styles['list-item']} ${styles['back-transparent']}`}>+ More to come...</span>
          </div>
        </div>
      </div>
      <div className={`${styles['login-item']} ${styles['login-component']} flex flex-wrap justify-center items-center`}>
       <Login/>
      </div>
    </div>
  );
}
