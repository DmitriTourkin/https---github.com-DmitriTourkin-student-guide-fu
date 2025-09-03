"use client"

import Link from "next/link";
import { useState } from "react";
import { navBarData } from "@/app/library/navigation";
import styles from './Navigation.module.css';

export default function NavBar() {
  const [ navOptions ] = useState(navBarData.pages);

  return (
      <nav className={styles.navigationBar}>
        {navOptions.map(item => (
          <Link className={styles.link}
            key={item.href}
            href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
  )
}