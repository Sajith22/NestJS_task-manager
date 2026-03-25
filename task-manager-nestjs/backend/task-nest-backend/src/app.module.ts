import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',           // XAMPP default is empty
      database: 'task_manager_nestjs',
      entities: [Task],
      synchronize: true,      // Creates tables automatically
      logging: true,          // Log SQL queries (optional)
    }),
    TasksModule,
  ],
})
export class AppModule {}