import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;
  return (
    <section id="projects">
      <div className="container">
        <h2>Проекты</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {projects.map((project) => (
            <div key={project.id} style={{ border: '1px solid #333', padding: '20px', borderRadius: '8px' }}>
              {/* Заглушка вместо картинки, чтобы не было ошибок */}
              <div style={{ width: '100%', height: '200px', backgroundColor: '#222', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                {project.title}
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
              <p style={{ color: '#ccc', marginBottom: '15px' }}>{project.description}</p>
              <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#888' }}>
                {project.tech.join(', ')}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href={project.linkDemo} className="btn" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>Демо</a>
                <a href={project.linkCode} className="btn" style={{ fontSize: '0.8rem', padding: '8px 16px', borderColor: '#555' }}>Код</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}