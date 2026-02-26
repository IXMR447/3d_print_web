import styles from './SubPage.module.css'

export default function Promotion() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>实验室推广</h1>
        <p className={styles.lead}>实验室活动、对外合作与品牌推广。</p>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>内容框架</h2>
          <p className={styles.placeholder}>（此处可添加：近期活动、合作案例、联系方式等，具体内容由您后续补充。）</p>
        </section>
      </div>
    </div>
  )
}
