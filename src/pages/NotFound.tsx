// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Trang không tìm thấy</p>
      <Link to="/" className={styles.button}>
        Quay lại trang chủ
      </Link>
    </div>
  );
};
