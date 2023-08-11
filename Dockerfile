# Usar a imagem do OpenJDK como base
FROM openjdk:11-jre-slim

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo JAR do seu projeto Spring Boot para o diretório de trabalho
COPY target/productReactSpring-1.0.0.jar /app/app.jar

# Expor a porta que a aplicação Spring Boot está usando (normalmente a 8080)
EXPOSE 8080

# Comando para iniciar a aplicação quando o container for executado
CMD ["java", "-jar", "app.jar"]


