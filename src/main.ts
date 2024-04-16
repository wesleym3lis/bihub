import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add request interceptor
  axios.interceptors.request.use((config) => {
  console.log('Request:', config);
  return config;
  });
  
  await app.listen(3000);
}
bootstrap();
