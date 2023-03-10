import Visualizer from '../../visualizer/visualizer'
import styles from './index.module.css'

const developStyles = {
  '--content': '"Develop."',
  '--start-color': '#007CF0',
  '--end-color': '#00DFD8',
} as any

const previewStyles = {
  '--content': '"Preview."',
  '--start-color': '#7928CA',
  '--end-color': '#FF0080',
} as any

const shipStyles = {
  '--content': '"Ship."',
  '--start-color': '#FF4D4D',
  '--end-color': '#F9CB28',
} as any

function ExampleOne() {
  return (
    <Visualizer>
      <Visualizer.Content>
        <div className={styles.container}>
          <div className={styles.hero_texts}>
            {/* Margin bottom override to fix alignment */}
            <h1 style={{ marginBottom: 0 }} className={styles.hero_title}>
              <span
                style={developStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground1}`}
                >
                  Develop.
                </span>
              </span>
              <span
                style={previewStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground2}`}
                >
                  Preview.
                </span>
              </span>
              <span
                style={shipStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground3}`}
                >
                  Ship.
                </span>
              </span>
            </h1>
          </div>
        </div>
      </Visualizer.Content>
    </Visualizer>
  )
}

function ExampleTwo() {
  return (
    <Visualizer>
      <Visualizer.Content>
        <div className={styles.container}>
          <div className={styles.hero_texts}>
            {/* Margin bottom override to fix alignment */}
            <h1 style={{ marginBottom: 0 }} className={styles.hero_title}>
              <span
                style={{ ...developStyles, backgroundClip: 'unset' }}
                className={styles.animated_gradient_background}
              >
                <span
                  style={{ backgroundClip: 'unset' }}
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground1}`}
                >
                  Develop.
                </span>
              </span>
              <span
                style={{ ...previewStyles, backgroundClip: 'unset' }}
                className={styles.animated_gradient_background}
              >
                <span
                  style={{ backgroundClip: 'unset' }}
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground2}`}
                >
                  Preview.
                </span>
              </span>
              <span
                style={{ ...shipStyles, backgroundClip: 'unset' }}
                className={styles.animated_gradient_background}
              >
                <span
                  style={{ backgroundClip: 'unset' }}
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground3}`}
                >
                  Ship.
                </span>
              </span>
            </h1>
          </div>
        </div>
      </Visualizer.Content>
    </Visualizer>
  )
}

function ExampleThree() {
  return (
    <Visualizer>
      <Visualizer.Content>
        <div className={styles.container}>
          <div className={styles.hero_texts}>
            <h1 className={styles.hero_title}>
              <span
                style={developStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground1}`}
                >
                  Develop.
                </span>
              </span>
              <span
                style={previewStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground2}`}
                >
                  Preview.
                </span>
              </span>
              <span
                style={shipStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground3}`}
                >
                  Ship.
                </span>
              </span>
            </h1>
            {/*  */}
            <h2 className={styles.hero_description}>
              Vercel is the platform for frontend developers, providing the
              speed and reliability innovators need to create at the moment of
              inspiration.
            </h2>
          </div>
        </div>
      </Visualizer.Content>
    </Visualizer>
  )
}

function Final() {
  return (
    <Visualizer>
      <Visualizer.Content>
        <div className={styles.container}>
          <div className={styles.hero_texts}>
            <h1 className={styles.hero_title}>
              <span
                style={developStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground1}`}
                >
                  Develop.
                </span>
              </span>
              <span
                style={previewStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground2}`}
                >
                  Preview.
                </span>
              </span>
              <span
                style={shipStyles}
                className={styles.animated_gradient_background}
              >
                <span
                  className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground3}`}
                >
                  Ship.
                </span>
              </span>
            </h1>
            <h2 className={styles.hero_description}>
              Vercel is the platform for frontend developers, providing the
              speed and reliability innovators need to create at the moment of
              inspiration.
            </h2>
            <div className={styles.hero_buttons}>
              <div className={styles.hero_button_item}>
                <a
                  className={`${styles.button} ${styles.button_primary}`}
                  role="button"
                >
                  <span className={styles.button_content}>
                    <svg
                      aria-label="Vercel Logo"
                      fill="currentColor"
                      viewBox="0 0 75 65"
                      height="15.600000000000001"
                      width="18"
                    >
                      <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                    </svg>
                    <span>Start deploying</span>
                  </span>
                </a>
              </div>
              <div className={styles.hero_button_item}>
                <div className={styles.hero_gradient_button_wrapper}>
                  <span
                    style={developStyles}
                    className={`${styles.hero_button_bg} ${styles.animated_gradient_foreground1}`}
                  />
                  <span
                    style={previewStyles}
                    className={`${styles.hero_button_bg} ${styles.animated_gradient_foreground2}`}
                  />
                  <span
                    style={shipStyles}
                    className={`${styles.hero_button_bg} ${styles.animated_gradient_foreground3}`}
                  />
                  <a
                    className={`${styles.button} ${styles.button_secondary}`}
                    role="button"
                  >
                    <span className={styles.button_content}>Get a Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Visualizer.Content>
    </Visualizer>
  )
}

export { ExampleOne, ExampleTwo, ExampleThree }
export default Final
