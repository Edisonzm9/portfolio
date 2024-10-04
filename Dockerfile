# Etapa 1: Construcción de la aplicación
FROM node:16-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación con NGINX
FROM nginx:alpine

# Copiar los archivos construidos al directorio de NGINX
COPY --from=build /app/build /usr/share/nginx/html



# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
