import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { name, role } = portfolioData.personal;
  return (
    <section style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      borderBottom: 'none' 
    }}>
      <div className="container">
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>{name}</h1>
        <p style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '30px' }}>{role}</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="#projects" className="btn">Смотреть работы</a>
          <a href="#contacts" className="btn" style={{ background: '#fff', color: '#000' }}>Связаться</a>
        </div>
      </div>
    </section>
  );
}