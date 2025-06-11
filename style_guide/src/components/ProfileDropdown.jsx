// components/ProfileDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/ProfileDropdown.module.css';
import profileIcon from '../assets/profile-menu/profile.svg';
import globeIcon from '../assets/profile-menu/globe.svg';
import badgeIcon from '../assets/profile-menu/badge.svg';
import listIcon from '../assets/profile-menu/list.svg';
import inkpenIcon from '../assets/profile-menu/inkpen.svg';

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.profileDropdownWrapper} ref={dropdownRef}>
      <button className={styles.dropdownToggle} onClick={() => setOpen(!open)}>
        프로필 &nbsp;▾
      </button>

      {open && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem}>
            <img src={profileIcon}/>프로필
          </div>
          <div className={styles.dropdownItem}>
            <img src={globeIcon}/>국가
          </div>
          <div className={styles.dropdownItem}>
            <img src={badgeIcon}/>뱃지함
          </div>
          <div className={styles.dropdownItem}>
            <img src={listIcon}/>버킷리스트
          </div>
          <div className={styles.dropdownItem}>
            <img src={inkpenIcon}/>여행일지
          </div>
        </div>
      )}
    </div>
  );
}
