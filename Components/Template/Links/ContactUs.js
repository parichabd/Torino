import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.container}>
      <img src="/image/main/2477332.jpg" />
      <div>
        <h1>آدرس :</h1>
        <p>
          آرژانتین-ساعی، خیابان شهید عماد مغنیه ( بهاران )، خیابان بیست و سوم،
          پلاک: 9.0، طبقه: 5، واحد: 13،
        </p>
        <h1>تلفن پشتیبانی :</h1>
        <p>۰۲۱۲۳۴۳۴۴۱</p>
        <h1>ایمیل :</h1>
        <p>info@tourino.ir</p>
      </div>
    </div>
  );
}

export default ContactUs;
