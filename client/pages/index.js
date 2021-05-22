import Head from 'next/head'
import styles from '../styles/Auth.module.css'





export default function Home({posts}) {
  
  return (
    <>
      <div className={styles.container}>
        
        <a href="http://localhost:3000/auth" className={styles.auth_page_link}>Auth Page</a>
      </div>
      
    </>
  )
}


