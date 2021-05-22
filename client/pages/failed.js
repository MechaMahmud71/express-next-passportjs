
import styles from '../styles/Auth.module.css';

function failed() {
  return (
    <div className={styles.container}>
      <p>Sorry!! Failed to Login</p>
      
      <a href="http://localhost:3000/auth" className={styles.auth_page_link}>Go to Auth Page</a>

    </div>
  )
}

export default failed
