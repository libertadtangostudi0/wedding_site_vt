// src/pages/AdminPanel.tsx
import React from 'react';
import styles from './AdminPanel.module.css';

export const AdminPanel: React.FC = () => {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <h3>Admin Panel</h3>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Gallery Items</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      
      <main className={styles.content}>
        <header>
          <h1>Dashboard</h1>
        </header>
        <section className={styles.stats}>
          <div className={styles.card}>Total Images: 12</div>
          <div className={styles.card}>Pending Requests: 3</div>
        </section>
      </main>
    </div>
  );
};
