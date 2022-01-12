import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '../src/app/app.module'
import { StartedMySqlContainer, MySqlContainer } from 'testcontainers'
const execa = require('execa')

describe('@projectcelestia/api', () => {
  jest.setTimeout(240_000)

  let app: INestApplication
  let mySqlContainer: StartedMySqlContainer
  let databaseUrl: string

  beforeAll(async () => {
    mySqlContainer = await new MySqlContainer().start()
    databaseUrl = `mysql://${mySqlContainer.getUsername()}:${mySqlContainer.getUserPassword()}@${mySqlContainer.getHost()}:${mySqlContainer.getPort()}/${mySqlContainer.getDatabase()}`

    await execa('pnpm prisma', ['migrate', 'deploy'], {
      env: {
          'DATABASE_URL': databaseUrl
      }
    })

    process.env.DATABASE_URL = databaseUrl

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  describe('GET /', () => {
    it(`should return "Welcome to api!"`, () => {
      return request(app.getHttpServer()).get('/').expect(200).expect({ message: 'Welcome to api!' })
    })
  })

  afterAll(async () => {
    await app.close()
    await mySqlContainer.stop()
  })
})
