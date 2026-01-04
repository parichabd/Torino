import styles from "./PageNotfoundError.module.css";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className={styles.errordetails}>
      <img src="/image/error/Error TV.svg" />
      <div className={styles.errordetails_prograph}>
        <p className={styles.footer_text}>صفحه مورد نظر یافت نشد!</p>
        <button className={styles.footer_button}>
          <Link href={"/"}>بازگشت به صفحه اصلی</Link>
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
