import React from "react";
import styles from "../styles/Map.module.css";
import ToggleBtn from "./ToggleBtn";
import lockIcon from "../assets/lock_white.svg";
import shareIcon from "../assets/share_grey.svg";
import SearchBar from "./SearchBar";
import Map from "./Map";

// TODO: Condition lock icon on premium membership
// TODO: Condition country color on visited countries data
// TODO: Search bar: Add onChange function

export default function MapPage() {
    return (
        <div className={styles.mapContainer}>
            <div className={styles.btnTopLeftContainer}>
                <SearchBar
                    placeholder="나라 이름"
                    barWidth="300px"
                />
            </div>
            
            <div className={styles.btnTopContainer}>
                <ToggleBtn 
                    firstOption="방문 국가"
                    secondOption={
                        <span className={styles.optionContent}>
                            <img src={lockIcon} className={styles.icon}/>희망 국가
                        </span>
                    }
                />
            </div>
            <div className={styles.btnBottomContainer}>
                <button className={styles.btnOutline}>통계</button>
                <button className={styles.btnOutline}>
                    공유 <img src={shareIcon} className={styles.icon}/>
                </button>
            </div>
            <div className={styles.btnBottomRightContainer}>
                <button className={styles.btnOutline}>랜덤 추천</button>
            </div>
            <Map/>
        </div>
    );
}