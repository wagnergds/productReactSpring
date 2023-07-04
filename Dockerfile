# Definindo a imagem base
FROM openjdk:8-jdk-alpine

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o arquivo JAR para o contêiner
COPY ./src/target/productReactSpring-1.0.0.jar /app/productReactSpring-1.0.0.jar

# Definindo o comando de execução da aplicação
CMD ["java", "-jar", "productReactSpring-1.0.0.jar"]
