import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websockets.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [WebsocketGateway],
})
export class GatewayModule {}
