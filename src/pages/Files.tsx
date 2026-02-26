import styles from './SubPage.module.css'

export default function Files() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>相关文件</h1>
        <p className={styles.lead}>模型库、切片配置、实验室文档与资源下载。</p>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>内容框架</h2>
          <p className={styles.placeholder}>（此处可添加：分类列表、下载链接、说明文档等，具体内容由您后续补充。）</p>
        </section>
      </div>
    </div>
  )
}
