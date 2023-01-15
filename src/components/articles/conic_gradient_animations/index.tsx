import Visualizer from '../../visualizer/visualizer'
import styles from './styles.module.css'

function ExampleOne() {
  return (
    <Visualizer>
      <Visualizer.Content className={styles.content}>
        <div className={styles.exampleOne__animation}></div>
      </Visualizer.Content>
    </Visualizer>
  )
}

function ExampleTwo() {
  return (
    <Visualizer>
      <Visualizer.Content className={styles.content}>
        <div className={styles.exampleTwo__animation}></div>
      </Visualizer.Content>
    </Visualizer>
  )
}

function ExampleThree() {
  return (
    <Visualizer>
      <Visualizer.Content className={styles.content}>
        <div className={styles.exampleThree__animation}></div>
      </Visualizer.Content>
    </Visualizer>
  )
}

function Final() {
  return (
    <Visualizer>
      <Visualizer.Content className={styles.content}>
        <div className={styles.final__animation}></div>
      </Visualizer.Content>
    </Visualizer>
  )
}

export { ExampleOne, ExampleTwo, ExampleThree }
export default Final
