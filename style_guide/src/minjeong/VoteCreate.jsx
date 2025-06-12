// VoteCreate.jsx
import React, { useState } from 'react';
import styles from './Vote.module.css';

const VoteCreate = ({ onVoteUpdate }) => {
  const [vote, setVote] = useState({
    id: '',
    user_id: '',
    post_id: '',
    title: '',
    end_date: null,
    created_at: new Date(),
    is_multiple_choice: false,
    max_choices: 1,
    is_anonymous: false,
    is_official: false,
    blind_status: 'VISIBLE'
  });

  const [voteOptions, setVoteOptions] = useState([
    { id: '1', vote_id: '', option_title: '', vote_count: 0 },
    { id: '2', vote_id: '', option_title: '', vote_count: 0 }
  ]);

  const updateVoteSettings = (field, value) => {
    setVote(prev => ({ ...prev, [field]: value }));
  };

  const addOption = () => {
    const newOption = {
      id: Date.now().toString(),
      vote_id: '',
      option_title: '',
      vote_count: 0
    };
    setVoteOptions([...voteOptions, newOption]);
  };

  const removeOption = (optionId) => {
    if (voteOptions.length > 2) {
      setVoteOptions(voteOptions.filter(option => option.id !== optionId));
    }
  };

  const updateOption = (optionId, title) => {
    setVoteOptions(voteOptions.map(option =>
      option.id === optionId ? { ...option, option_title: title } : option
    ));
  };

  return (
    <div className={styles.voteContainer}>
      <div className={styles.contentPadding}>
        <h2 className={styles.title}>새 투표 만들기</h2>

        <div className={styles.formGroup}>
          <label className={styles.label}>투표 제목</label>
          <input
            type="text"
            className={styles.input}
            placeholder="투표 제목을 입력하세요"
            value={vote.title}
            onChange={(e) => updateVoteSettings('title', e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>투표 마감일</label>
          <input
            type="datetime-local"
            className={styles.input}
            value={vote.end_date ? new Date(vote.end_date).toISOString().slice(0, 16) : ''}
            onChange={(e) => updateVoteSettings('end_date', e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>투표 항목</label>
          {voteOptions.map((option, index) => (
            <div key={option.id} className={styles.optionContainer}>
              <input
                type="text"
                placeholder={`선택지 ${index + 1}`}
                value={option.option_title}
                onChange={(e) => updateOption(option.id, e.target.value)}
                className={styles.optionInput}
              />
              {voteOptions.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(option.id)}
                  className={styles.removeButton}
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addOption}
            className={styles.addOptionButton}
          >
            + 선택지 추가
          </button>
        </div>

        <div className={styles.settingsPanel}>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={vote.is_multiple_choice}
                onChange={(e) => updateVoteSettings('is_multiple_choice', e.target.checked)}
                className={styles.checkbox}
              />
              중복 선택 허용
            </label>
          </div>

          {vote.is_multiple_choice && (
            <div className={styles.checkboxGroup}>
              <label className={styles.label}>최대 선택 개수</label>
              <input
                type="number"
                min="1"
                max={voteOptions.length}
                value={vote.max_choices}
                onChange={(e) => updateVoteSettings('max_choices', parseInt(e.target.value))}
                className={styles.numberInput}
              />
            </div>
          )}

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={vote.is_anonymous}
                onChange={(e) => updateVoteSettings('is_anonymous', e.target.checked)}
                className={styles.checkbox}
              />
              익명 투표
            </label>
          </div>
        </div>

        <button
          onClick={() => onVoteUpdate(vote, voteOptions)}
          className={styles.primaryButton}
          disabled={!vote.title || voteOptions.some(opt => !opt.option_title)}
        >
          투표 만들기
        </button>
      </div>
    </div>
  );
};

export default VoteCreate;
