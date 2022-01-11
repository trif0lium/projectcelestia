import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '../src/app/app.module'
import { StartedMySqlContainer, MySqlContainer } from 'testcontainers'

describe('@projectcelestia/api', () => {
  let app: INestApplication
  let mySQLContainer: StartedMySqlContainer

  beforeAll(async () => {
    mySQLContainer = await new MySqlContainer().start()

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })
})
