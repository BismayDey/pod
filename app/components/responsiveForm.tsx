import styles from '../styles/responsiveForm.module.css';

export const ResponsiveForm = () => {
  return (
    <div className={styles.bookingcardMob}>
      <div className={styles.bcm_text}>
        <div className={styles.text_price}>
          <h6>₹1,49,086</h6>
          <div className={styles.inside_price}>
            <strong>₹1,00,086</strong>
            <p>/night</p>
          </div>
        </div>
      </div>
      <div className={styles.bcm_btn}>
        <button className={styles.inside_bcm_btn}>Check Availability</button>
      </div>
    </div>
  );
};
