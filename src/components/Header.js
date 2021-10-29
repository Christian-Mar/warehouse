import tweewafels from '../images/tweewafels.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={tweewafels} alt='wafels' className={styles.img}/> 
      <h1 className={styles.title}>Het wafelmagazijn</h1>    
    </div>
  )
}

export default Header
     