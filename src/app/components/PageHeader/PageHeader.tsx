'use client'

import { usePathname } from 'next/navigation';
import { getPageData } from '../../library/page-data';
import styles from './PageHeader.module.css';

export default function PageHeader() {
  const pathname = usePathname();
  const pageData = getPageData(pathname);

  return (
    <div className={styles.second}>
      <div className={styles.titleLimiter}>
          <h1 className={styles.pageTopic}>{pageData.title}</h1>
      </div>
      <p className={styles.pageDescription}>{pageData.description}</p>
      <ul className={styles.tagsRelated}>
        {pageData.topics.map(topic => (
          <li key={topic} className={styles.topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};