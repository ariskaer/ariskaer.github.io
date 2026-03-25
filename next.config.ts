/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Важно: создаёт статическую версию для GitHub Pages
  images: {
    unoptimized: true, // Важно: отключает оптимизацию изображений для статики
  },
}

export default nextConfig