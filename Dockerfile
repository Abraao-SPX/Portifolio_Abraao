FROM node:20-alpine AS base
WORKDIR /app

# Instalar dependências
COPY package.json package-lock.json* ./
RUN npm install

# Copiar projeto
COPY . .

# Expõe porta pro NextJS
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# O comando npm run dev é ideal para ambiente de desenvolvimento com hot-reload.
CMD ["npm", "run", "dev"]

