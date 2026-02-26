import { Link } from 'react-router-dom'
import PrinterAnimation from '../components/PrinterAnimation'
import styles from './Home.module.css'

const sections = [
  { to: '/tutorial', title: '打印教程', desc: '从零开始学习 3D 打印' },
  { to: '/remote-print', title: '远程打印服务', desc: '在线提交模型，预约打印' },
  { to: '/files', title: '相关文件', desc: '模型库、切片配置与文档' },
  { to: '/community', title: '社区论坛', desc: '交流经验、分享作品' },
  { to: '/promotion', title: '实验室推广', desc: '活动与对外合作' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          创造，从层叠开始
        </h1>
        <p className={styles.subtitle}>
          3D 打印实验室 — 将想法变为触手可及的现实
        </p>
        <div className={styles.printerWrap}>
          <PrinterAnimation />
        </div>
      </section>

      <section className={styles.entry}>
        <p className={styles.entryTitle}>探索更多</p>
        <div className={styles.cards}>
          {sections.map(({ to, title, desc }) => (
            <Link key={to} to={to} className={styles.card}>
              <span className={styles.cardTitle}>{title}</span>
              <span className={styles.cardDesc}>{desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>3D 打印实验室 · 本地 Demo · 后续可接入云服务器</p>
      </footer>
    </div>
  )
}
