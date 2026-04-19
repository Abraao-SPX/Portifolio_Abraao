/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa a exportação estática de HTML (Obrigatório para GitHub Pages)
  output: 'export',

  // Desativa a otimização de imagens baseada em servidor do Next.js
  // (Pois o GitHub Pages não roda um servidor Node para otimizá-las em tempo real)
  images: {
    unoptimized: true,
  },

  // IMPORTANTE:
  // Se o seu repositório no GitHub se chama "Portifolio_Abraao" e NÃO "abraao.github.io",
  // O GitHub vai hospedar seu site em: https://seunome.github.io/Portifolio_Abraao
  // Se for o caso, DESCOMENTE a linha abaixo e coloque o nome exato do seu repositório.
  // basePath: '/Portifolio_Abraao',
};

export default nextConfig;

