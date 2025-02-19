## Prisma

1. Install & Initialize

```sh
npm install @prisma/client prisma
npx prisma init
```

2. Create Models at ./prisma/schema/schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["prismaSchemaFolder"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

3. Generate Tables with command

```sh
npx prisma generate
npx prisma migrate dev --name init
```

- watch tables at database

4. Create Prisma Service

```sh
nest generate service prisma
```

- PrismaService นี้เป็นสร้างการเชื่อมต่อกับฐานข้อมูล PostgreSQL โดยใช้ Prisma ตอนที่ NestJS สตาร์ทแอปขึ้นมา
- PrismaService จะเป็นตัวจัดการทุกๆ การสื่อสารกับฐานข้อมูล

```js
import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
```
