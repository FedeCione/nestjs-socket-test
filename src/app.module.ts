import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import helmet from 'helmet';
import morgan from './configs/morgan.config';
import { GatewayModule } from './app/modules/websockets/websocket.module';
import { QuestionsModule } from '@modules/questions/questions.module';

@Module({
  imports: [
    /* Nest/Config Modules */
    ConfigModule.forRoot(),
    /* API Modules */
    GatewayModule,
    QuestionsModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), morgan).forRoutes('*');
  }
}
