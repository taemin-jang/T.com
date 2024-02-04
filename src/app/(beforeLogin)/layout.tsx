import styles from '@/app/(beforeLogin)/page.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
