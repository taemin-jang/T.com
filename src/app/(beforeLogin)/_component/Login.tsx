import styles from '@/app/(beforeLogin)/_component/login.module.css';

export default function Login() {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.closeButton}>
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <h1>로그인하세요.</h1>
        </div>
        <form action="">
          <div className={styles.body}>
            <div className={styles.id}>
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" />
            </div>
            <div className={styles.pw}>
              <label htmlFor="pw">비밀번호</label>
              <input type="password" id="pw" />
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.loginButton}>로그인하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
