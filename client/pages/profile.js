
import styles from '../styles/Auth.module.css'


import axios from "axios";



export default function Profile({success}) {
  
  return (
    <>
      
      <title>Profile</title>
      
      <div className={styles.container}>
        <h1 className={styles.greetings}>Congrats!!</h1>
        <p className={styles.loggedin}>You are logged in</p>
        <p className={styles.success}>{success}</p>
      </div>
    </>
  )
}

export const getStaticProps=async()=>{
  const {data:{message}}= await axios.get(`http://localhost:5000/profile`);

  return{
    props:{
      success:message
    }
  }
}

  
