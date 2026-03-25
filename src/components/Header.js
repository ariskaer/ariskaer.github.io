import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ 
      padding: '20px 0', 
      borderBottom: '1px solid #333', 
      position: 'sticky', 
      top: 0, 
      backgroundColor: '#000', 
      zIndex: 100 
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AS.</div>
        <nav>
          <ul style={{ display: 'flex', gap: '20px' }}>
            <li><Link href="#about">Обо мне</Link></li>
            <li><Link href="#projects">Проекты</Link></li>
            <li><Link href="#contacts">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}