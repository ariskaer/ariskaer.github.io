// src/components/Contacts.js
import { portfolioData } from '../data/portfolio';

export default function Contacts() {
  const { email, phone, telegram, instagram, github, vk } = portfolioData.contacts;

  return (
    <section id="contacts" style={{ borderBottom: 'none' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>Контакты</h2>
        <p style={{ marginBottom: '30px', fontSize: '1.2rem', color: '#ccc' }}>
          Готова к предложениям и сотрудничеству. Свяжитесь со мной любым удобным способом:
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {/* Телефон */}
          <a href={`tel:${phone.replace(/\s|\(|\)|-/g, '')}`} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            📞 <span>{phone}</span>
          </a>
          
          {/* Telegram */}
          <a href={telegram} target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✈️ <span>Telegram</span>
          </a>
          
          {/* Instagram */}
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            📸 <span>Instagram</span>
          </a>
          
          {/* Email */}
          <a href={`mailto:${email}`} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✉️ <span>Email</span>
          </a>
        </div>

        {/* Дополнительные ссылки (GitHub, VK) */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '0.95rem' }}>
            💻 GitHub
          </a>
          <a href={vk} target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '0.95rem' }}>
            👥 VK
          </a>
        </div>
      </div>
    </section>
  );
}