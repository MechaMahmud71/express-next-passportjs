import Head from 'next/head'
import styles from '../styles/Auth.module.css'

const Auth=()=> {
  
  const FACEBOOK_URL="http://localhost:5000/auth/facebook";
  const GOOGLE_URL="http://localhost:5000/auth/google";
  
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
    <title>Auth</title>
    </Head>
     <div className={styles.container}>
      
      <a href={FACEBOOK_URL} className={styles.facebook_button}>
        <i className="fab fa-facebook-f" id="facebook-icon"></i>
        <span className={styles.span}>Login with Facebook</span>
      </a>
      <a href={GOOGLE_URL}>
        <div className={styles.google_btn}>
          <div className={styles.google_icon_wrapper}>
            <img className={styles.google_icon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
        <p className={styles.btn_text}><b>Sign in with google</b></p>
        </div>
      </a>
     </div>
    
    </>
  )
}



export default Auth;