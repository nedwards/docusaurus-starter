import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx(styles['banner'])}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.grid, styles['grid-cols-2'])}>
          <div>
            <h1 className={styles.h1}>Design System Documentation</h1>
            <p className={styles['sub-heading']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles['button-group']}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started"
              >
                Get Started
              </Link>
              <Link
                className="button button--link button--lg"
                to="/docs/components"
              >
                View Components
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className={clsx(styles['banner'])}>
          <div className={clsx(styles.container)}>
            <div className={clsx(styles.grid, styles['grid-cols-3'])}>
              <div>
                <h3 className={styles.h3}>Start Designing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link className="text--bold" to="/docs/getting-started/design">
                  Learn more
                </Link>
              </div>
              <div>
                <h3 className={styles.h3}>Start Developing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  className="text--bold"
                  to="/docs/getting-started/development"
                >
                  Learn more
                </Link>
              </div>
              <div>
                <h3 className={styles.h3}>Foundations</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link className="text--bold" to="/docs/foundations">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
