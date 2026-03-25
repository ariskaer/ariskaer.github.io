export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid #333' }}>
      <p style={{ color: '#666' }}>© {year} Шведова Арина. Все права защищены.</p>
    </footer>
  );
}