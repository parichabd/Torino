export default function SupportPage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "sans-serif",
      }}
    >
      {/* عنوان */}
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        پشتیبانی آنلاین تورهای مسافرتی
      </h1>
      <p style={{ color: "#555", marginBottom: "24px" }}>
        ۷ روز هفته، از ساعت ۹ تا ۲۱ پاسخگوی شما هستیم
      </p>

      {/* راه‌های ارتباط */}
      <section style={{ marginBottom: "32px" }}>
        <h2>راه‌های ارتباط با پشتیبانی</h2>
        <ul>
          <li>📞 تلفن: 021-12345678</li>
          <li>📧 ایمیل: support@travel-site.ir</li>
          <li>💬 چت آنلاین: از طریق دکمه پایین صفحه</li>
        </ul>
      </section>

      {/* سوالات متداول */}
      <section style={{ marginBottom: "32px" }}>
        <h2>سوالات متداول</h2>

        <details>
          <summary>چطور تورم رو لغو کنم؟</summary>
          <p>
            وارد حساب کاربری خود شوید، از بخش «سفارش‌های من» تور موردنظر را
            انتخاب و درخواست لغو ثبت کنید.
          </p>
        </details>

        <details>
          <summary>چقدر طول می‌کشه مبلغ بازگشت داده بشه؟</summary>
          <p>
            بسته به نوع تور، بین ۳ تا ۷ روز کاری مبلغ به حساب شما واریز می‌شود.
          </p>
        </details>

        <details>
          <summary>اگر پرداخت ناموفق بود چی کار کنم؟</summary>
          <p>
            در صورت کسر مبلغ، نهایتاً تا ۷۲ ساعت به‌صورت خودکار بازگشت داده
            می‌شود. در غیر این صورت با پشتیبانی تماس بگیرید.
          </p>
        </details>

        <details>
          <summary>آیا امکان تغییر تاریخ تور وجود دارد؟</summary>
          <p>
            بله، در صورت وجود ظرفیت و طبق قوانین تور، امکان تغییر تاریخ وجود
            دارد.
          </p>
        </details>
      </section>

      {/* فرم ارسال تیکت */}
      <section>
        <h2>ارسال درخواست پشتیبانی</h2>
        <p style={{ marginBottom: "12px", color: "#555" }}>
          اگر پاسخ سوال خود را پیدا نکردید، فرم زیر را پر کنید.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "500px",
          }}
        >
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="ایمیل"
            required
            style={inputStyle}
          />

          <select required style={inputStyle}>
            <option value="">موضوع درخواست</option>
            <option>لغو یا بازگشت وجه</option>
            <option>مشکل پرداخت</option>
            <option>تغییر تاریخ تور</option>
            <option>سایر موارد</option>
          </select>

          <textarea
            placeholder="توضیحات پیام"
            rows="5"
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ارسال درخواست
          </button>
        </form>
      </section>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
};