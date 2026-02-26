import styles from './SubPage.module.css'

export default function RemotePrint() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>远程打印服务</h1>
        <p className={styles.lead}>在线提交模型文件，预约实验室设备进行打印。</p>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>内容框架</h2>
          <p className={styles.placeholder}>（此处可添加：提交流程、文件要求、预约时段、价格说明等，具体内容由您后续补充。）</p>
        </section>
      </div>
    </div>
  )
}
