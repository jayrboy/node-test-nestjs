import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3032;

  const config = new DocumentBuilder()
    .setTitle('Station API Example')
    .setDescription('API for managing station data')
    .setVersion('1.0')
    .addTag('stations')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  await app.listen(port, () => {
    console.log('🚀 Server running at http://localhost:%s/api/docs', port);
    // console.log('🚀 GraphQL running at http://localhost:%s/graphql', port);
  });
}
bootstrap();
