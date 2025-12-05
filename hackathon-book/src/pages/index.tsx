import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <Heading as="h1" className="hero__title">
          AI-Driven & Spec-Driven Documentation and RAG Chatbots
        </Heading>

        <p className="hero__subtitle">
          A complete practical guide to modern AI documentation, RAG systems, spec-driven workflows, and intelligent knowledge engines.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter01"
          >
            📘 Start Reading the Book
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter01"
            style={{ marginLeft: '12px' }}
            >
            📚 All Chapters
          </Link>



          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ marginLeft: '12px' }}
          >
            ✨ About the Project
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="AI-Driven Documentation & RAG Chatbots"
      description="A complete guide on AI-driven documentation, RAG chatbots, spec-driven development, and intelligent knowledge systems."
    >
      <HomepageHeader />
      <main>
        <section className="container" style={{ padding: '40px 0' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>📖 What This Book Covers</h2>
            <p style={{ fontSize: '18px', marginTop: '10px' }}>
              Learn how documentation, development, chatbots, and workflows
              are transformed using modern AI technologies — including RAG,
              OpenAI Agents, spec-driven pipelines, and human-in-the-loop systems.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
