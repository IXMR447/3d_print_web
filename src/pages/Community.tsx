import styles from './SubPage.module.css'

export default function Community() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>社区论坛</h1>
        <p className={styles.lead}>交流打印经验、分享作品与问题讨论。</p>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>内容框架</h2>
          <p className={styles.placeholder}>（此处可添加：帖子列表、发帖入口、版块分类等，具体内容由您后续补充。）</p>
        </section>
      </div>
    </div>
  )
}
