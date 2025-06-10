import React from 'react';
import styles from '../styles/SearchBar.module.css';
import search_icon from '../assets/search_grey.svg';

export default function SearchBar({placeholder="", title, onSearchChange=() => {}, recommended=[]}) {
    return (
        <div className={styles.searchContainer}>
            <h1 className={styles.searchTitle}>{title}</h1>
            <div className={styles.searchBar}>
                <img src={search_icon}/>
                <input
                    type="text"
                    placeholder={placeholder}
                    className={styles.searchInput}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            {recommended.length > 0 && (
            <div className={styles.searchRecommendation}>
                <span>추천 :</span>
                {recommended.map((topic, index) => (
                <span key={index} className={styles.topic}>{topic}</span>
                ))}
            </div>
            )}
        </div>
    );
}
