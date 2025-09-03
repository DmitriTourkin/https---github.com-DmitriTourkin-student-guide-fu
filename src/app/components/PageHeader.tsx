'use client'

import { usePathname } from 'next/navigation';
import { getPageData } from '../library/page-data';

export default function PageHeader() {
  const pathname = usePathname();
  const pageData = getPageData(pathname);

  return (
    <header className="head-content">
      <h1 className="page-topic">{pageData.title}</h1>
      <p className="page-desciption">{pageData.description}</p>
      <ul className="tags-related">
        {pageData.topics.map(topic => (
          <li key={topic} className="topic">{topic}</li>
        ))}
      </ul>
    </header>
  );
};