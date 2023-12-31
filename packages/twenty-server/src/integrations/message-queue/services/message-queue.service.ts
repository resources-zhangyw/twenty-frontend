import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';

import { QueueJobOptions } from 'src/integrations/message-queue/drivers/interfaces/job-options.interface';
import { MessageQueueDriver } from 'src/integrations/message-queue/drivers/interfaces/message-queue-driver.interface';

import {
  MessageQueues,
  QUEUE_DRIVER,
} from 'src/integrations/message-queue/message-queue.constants';

@Injectable()
export class MessageQueueService implements OnModuleDestroy {
  constructor(
    @Inject(QUEUE_DRIVER) protected driver: MessageQueueDriver,
    protected queueName: MessageQueues,
  ) {
    if (typeof this.driver.register === 'function') {
      this.driver.register(queueName);
    }
  }

  async onModuleDestroy() {
    if (typeof this.driver.stop === 'function') {
      await this.driver.stop();
    }
  }

  add<T>(data: T, options?: QueueJobOptions): Promise<void> {
    return this.driver.add(this.queueName, data, options);
  }

  work<T>(
    handler: ({ data, id }: { data: T; id: string }) => Promise<void> | void,
  ) {
    return this.driver.work(this.queueName, handler);
  }
}
