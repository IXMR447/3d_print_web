import styles from './PrinterAnimation.module.css'

export default function PrinterAnimation() {
  return (
    <div className={styles.scene}>
      <div className={styles.printer}>
        <div className={styles.frame}>
          <div className={styles.topBar} />
          <div className={styles.leftPillar} />
          <div className={styles.rightPillar} />
          <div className={styles.bed}>
            <div className={styles.buildPlate} />
            <div className={styles.layer} />
          </div>
          <div className={styles.gantry}>
            <div className={styles.extruder}>
              <div className={styles.nozzle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
