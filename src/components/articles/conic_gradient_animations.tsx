import Visualizer from '../visualizer/visualizer'
import styles from './styles.module.css'

function ExampleOne() {
  return (
    <div className={styles.center}>
      <div className={styles.exampleOne__animation}></div>
    </div>
  )
}

function ExampleTwo() {
  return (
    <div className={styles.center}>
      <div className={styles.exampleTwo__animation}></div>
    </div>
  )
}

function ExampleThree() {
  return (
    <div className={styles.center}>
      <div className={styles.exampleThree__animation}></div>
    </div>
  )
}

function Final() {
  return (
    <Visualizer>
      <Visualizer.Content className={styles.content}>
        <div className={styles.final__animation}></div>
      </Visualizer.Content>
      <Visualizer.Controls />
    </Visualizer>
  )
}

export { ExampleOne, ExampleTwo, ExampleThree }
export default Final
