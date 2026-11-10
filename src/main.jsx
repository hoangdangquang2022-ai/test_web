import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const lessons = [
  { icon: '📚', title: 'Vocabulary', sub: 'Learn 10 new words', progress: '7/10 words', color: 'lavender' },
  { icon: '🎧', title: 'Listening', sub: 'Listen and understand', progress: '12 min', color: 'peach' },
  { icon: '✍️', title: 'Grammar', sub: 'Build better sentences', progress: '3/5 lessons', color: 'mint' },
  { icon: '💬', title: 'Speaking', sub: 'Practice pronunciation', progress: '5 min', color: 'blue' },
];

const words = [
  { word: 'Accomplish', type: 'verb', meaning: 'Hoàn thành, đạt được', example: 'You can accomplish anything with practice.' },
  { word: 'Confident', type: 'adjective', meaning: 'Tự tin', example: 'She feels confident when speaking English.' },
  { word: 'Improve', type: 'verb', meaning: 'Cải thiện', example: 'Reading helps improve your vocabulary.' },
];

function App() {
  const [active, setActive] = useState('Overview');
  const [learned, setLearned] = useState([]);
  const [quizChoice, setQuizChoice] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const nav = ['Overview', 'Vocabulary', 'Listening', 'Grammar', 'Speaking'];

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">B</span><span>bright<span className="brand-light">english</span></span></div>
      <div className="nav-label">LEARN</div>
      {nav.map((item, i) => <button key={item} className={active === item ? 'nav-item selected' : 'nav-item'} onClick={() => setActive(item)}>
        <span>{['⌂','▤','♫','✎','◉'][i]}</span>{item}
      </button>)}
      <div className="sidebar-bottom"><div className="upgrade-card"><div className="sparkle">✦</div><b>Keep your streak alive!</b><p>A little practice every day makes a big difference.</p><button onClick={() => setActive('Vocabulary')}>Start learning</button></div><div className="profile"><div className="avatar">L</div><div><b>English learner</b><small>Beginner · A1</small></div><span className="dots">•••</span></div></div>
    </aside>

    <main className="main-content">
      <header className="topbar"><div className="breadcrumb">My learning <span>/</span> <b>{active}</b></div><div className="top-actions"><span className="streak">🔥 3 day streak</span><button className="icon-button" aria-label="Notifications">♧</button><div className="avatar small">L</div></div></header>
      <section className="welcome-row"><div><div className="eyebrow">MONDAY, YOUR LEARNING JOURNEY CONTINUES</div><h1>{active === 'Overview' ? <>Small steps, <em>big progress.</em></> : active + ' practice'}</h1><p className="muted">You're doing great! Keep showing up and your English will grow.</p></div><div className="level-pill"><span>🌱</span><div><small>YOUR LEVEL</small><b>Beginner A1</b></div></div></section>

      <section className="stats-grid">
        <div className="stat-card"><span className="stat-icon purple">⚡</span><div><small>LEARNING POINTS</small><strong>240 <i>pts</i></strong><span className="stat-note positive">↑ 12% this week</span></div></div>
        <div className="stat-card"><span className="stat-icon orange">🔥</span><div><small>DAY STREAK</small><strong>3 <i>days</i></strong><span className="stat-note">Best: 7 days</span></div></div>
        <div className="stat-card"><span className="stat-icon green">◷</span><div><small>TIME LEARNED</small><strong>2.5 <i>hours</i></strong><span className="stat-note">This week</span></div></div>
      </section>

      <div className="content-grid">
        <div className="left-column">
          <section className="section-block"><div className="section-heading"><div><h2>Your daily practice</h2><p className="muted">Choose a skill and make today count.</p></div><button className="text-link" onClick={() => setActive('Vocabulary')}>View all ↗</button></div>
            <div className="lesson-grid">{lessons.map((lesson) => <button className="lesson-card" key={lesson.title} onClick={() => setActive(lesson.title)}><div className={'lesson-icon '+lesson.color}>{lesson.icon}</div><h3>{lesson.title}</h3><p>{lesson.sub}</p><div className="lesson-footer"><span>{lesson.progress}</span><span className="arrow">↗</span></div></button>)}</div>
          </section>

          <section className="section-block word-section"><div className="section-heading"><div><h2>Word of the day</h2><p className="muted">Grow your vocabulary, one word at a time.</p></div><span className="tag">DAILY WORD</span></div>
            <div className="word-card"><div className="word-decoration">Aa</div><div className="word-details"><div className="word-title">Resilient <span>adjective</span><button className="sound-button" aria-label="Play pronunciation" onClick={() => { const u = new SpeechSynthesisUtterance('Resilient'); u.lang = 'en-US'; speechSynthesis.speak(u); }}>🔊</button></div><p className="translation">Kiên cường, có khả năng phục hồi</p><p className="example">“She stayed resilient through every challenge.”</p></div></div>
          </section>
        </div>

        <div className="right-column">
          <section className="goal-card"><div className="goal-top"><div><span className="goal-label">WEEKLY GOAL</span><h2>You're on your way!</h2></div><span className="goal-emoji">🎯</span></div><div className="goal-number">150 <span>/ 300 min</span></div><div className="progress-track"><div className="progress-fill"></div></div><div className="goal-bottom"><span>50% completed</span><b>150 min to go</b></div></section>
          <section className="quiz-card"><div className="quiz-heading"><span className="quiz-icon">✦</span><span>QUICK QUIZ</span><span className="quiz-count">1 of 5</span></div><h3>What does “generous” mean?</h3><p className="muted">Choose the correct Vietnamese meaning.</p><div className="quiz-options">{['Keo kiệt','Hào phóng','Lo lắng','Chăm chỉ'].map((choice) => <button key={choice} className={'quiz-option '+(quizChoice === choice ? 'chosen' : '')} onClick={() => { setQuizChoice(choice); setShowAnswer(false); }}><span className="radio-dot"></span>{choice}</button>)}</div>{showAnswer && <p className={quizChoice === 'Hào phóng' ? 'answer correct' : 'answer wrong'}>{quizChoice === 'Hào phóng' ? 'Chính xác! Great job 🎉' : 'Not quite. The answer is “Hào phóng”.'}</p>}<button className="check-button" disabled={!quizChoice} onClick={() => setShowAnswer(true)}>Check answer <span>→</span></button></section>
        </div>
      </div>
      <footer>Made for your everyday progress <span>♥</span></footer>
    </main>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
