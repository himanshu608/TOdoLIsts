import styles from "./loadingSkeleton.module.css";

const LoadingSkeleton = () => {
  return (
    <div className={`${styles.container} ${styles.skeleton}`}>
        <div className={`${styles.content} ${styles.skeleton}`}>
            <div className={`${styles.title} ${styles.skeleton}`}>
            </div>
            <div className={`${styles.desc} ${styles.skeleton}`}>
            </div>
        </div>
    </div>
  )
}

export default LoadingSkeleton