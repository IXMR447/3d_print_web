import styles from './SubPage.module.css'

export default function Tutorial() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>打印教程</h1>
        <p className={styles.lead}>从零开始学习 3D 打印的入门与进阶指南。</p>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>内容框架</h2>
          <p className={styles.placeholder}>（此处可添加：入门步骤、切片软件使用、材料与参数、常见问题等，具体内容由您后续补充。）</p>
        </section>
      </div>
    </div>
  )
}
