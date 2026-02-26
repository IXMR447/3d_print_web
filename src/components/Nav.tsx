import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: '首页' },
  { to: '/tutorial', label: '打印教程' },
  { to: '/remote-print', label: '远程打印服务' },
  { to: '/files', label: '相关文件' },
  { to: '/community', label: '社区论坛' },
  { to: '/promotion', label: '实验室推广' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrap}>
        <NavLink to="/" className={styles.logo}>
          3D 打印实验室
        </NavLink>
        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
