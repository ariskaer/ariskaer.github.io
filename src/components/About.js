// src/components/About.js
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about, skills } = portfolioData;

  return (
    <section id="about">
      <div className="container">
        <h2>Обо мне</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>{about}</p>
          </div>
          <div>
            <h3 style={{ marginBottom: '15px' }}>Навыки</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map((skill, index) => (
                <span key={index} style={{ border: '1px solid #333', padding: '8px 16px', borderRadius: '4px', fontSize: '0.9rem' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}