import React from "react";
import styles from "./StyleGuidePage.module.css";

export default function StyleGuidePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>🎨 스타일 가이드 페이지</h1>

      <section>
        <h2>📌 타이포그래피</h2>
        <p className={styles.textLarge}>큰 텍스트 - 24px Bold</p>
        <p className={styles.textMedium}>중간 텍스트 - 18px Regular</p>
        <p className={styles.textSmall}>작은 텍스트 - 14px Light</p>
        <a href="#" className={styles.link}>링크 텍스트 예시</a>
      </section>

      <section>
        <h2>🔘 버튼</h2>
        <button className={styles.btnLarge}>큰 버튼</button>
        <button className={styles.btnMedium}>중간 버튼</button>
        <button className={styles.btnSmall}>작은 버튼</button>
        <button className={styles.btnDisabled} disabled>비활성화 버튼</button>
      </section>

      <section>
        <h2>✍️ 입력 요소</h2>
        <input className={styles.input} placeholder="텍스트 입력" />
        <select className={styles.select}>
          <option>옵션 1</option>
          <option>옵션 2</option>
        </select>
        <div>
          <label><input type="checkbox" /> 체크박스</label>
          <label><input type="radio" name="radio" /> 라디오</label>
        </div>
      </section>

      <section>
        <h2>🚨 모달 / 알림</h2>
        <div className={styles.modal}>모달 예시</div>
        <div className={styles.toast}>토스트 알림 예시</div>
      </section>

      <section>
        <h2>🎨 색상 팔레트</h2>
        <div className={styles.colorBoxPrimary}>Primary Color</div>
        <div className={styles.colorBoxSecondary}>Secondary Color</div>
        <div className={styles.colorBoxAccent}>Accent Color</div>
      </section>
    </div>
  );
}
