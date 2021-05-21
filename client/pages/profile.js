import Head from 'next/head'
import styles from '../styles/Home.module.css'


import axios from "axios";



export default function Profile({posts}) {
  // const postDOM=posts.map((el,index)=><div className={styles.test} key={index}>{el.title}</div>)
  console.log(posts)
  return (
    <>
      <div>You are logged in</div>
      <p></p>
    </>
  )
}

export const getStaticProps=async()=>{
  const {data:{message}}= await axios.get(`http://localhost:5000/profile`);

  console.log(message)
  
  return{
    props:{
      posts:message
    }
  }
}
