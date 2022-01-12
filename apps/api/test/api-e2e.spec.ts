import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '../src/app/app.module'
import { StartedMySqlContainer, MySqlContainer } from 'testcontainers'
import { execFile } from 'child_process'
import path = require('path')

describe('@projectcelestia/api', () => {
  jest.setTimeout(240_000)

  let app: INestApplication
  let mySqlContainer: StartedMySqlContainer
  let databaseUrl: string

  beforeAll(async () => {
    mySqlContainer = await new MySqlContainer().start()
    databaseUrl = `mysql://${mySqlContainer.getUsername()}:${mySqlContainer.getUserPassword()}@${mySqlContainer.getHost()}:${mySqlContainer.getPort()}/${mySqlContainer.getDatabase()}`

    await new Promise((resolve, reject) => {
      execFile(path.resolve(__dirname, '../../../node_modules/prisma/build/index.js'), ['migrate', 'deploy'], {
        env: {
          'DATABASE_URL': databaseUrl
        }
      }, (error) => {
        if (error != null) {
          console.log(error.message)
          reject(error.code ?? 1)
        } else {
          resolve(0)
        }
      })
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
