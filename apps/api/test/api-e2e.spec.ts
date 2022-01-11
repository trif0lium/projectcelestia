import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '../src/app/app.module'
import { StartedMySqlContainer, MySqlContainer } from 'testcontainers'
import { execFile } from 'child_process'
import path = require('path')

describe('@projectcelestia/api', () => {
  let app: INestApplication
  let mySQLContainer: StartedMySqlContainer

  beforeAll(async () => {
    mySQLContainer = await new MySqlContainer().start()

    await new Promise((resolve, reject) => {
      execFile(path.resolve('../../../../node_modules/prisma/build/index.js'), ['migrate', 'deploy'], {
        env: {
          'DATABASE_URL': `mysql://${mySQLContainer.getUsername()}:${mySQLContainer.getUserPassword()}@${mySQLContainer.getHost()}:${mySQLContainer.getPort()}/projectcelestia`
        }
      }, (error) => {
        if (error != null) {
          reject(error.code ?? 1)
        } else {
          resolve(0)
        }
      })
    })

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  describe('GET /api', () => {
    it(`should return "Welcome to api!"`, () => {
      return request(app.getHttpServer()).get('/api').expect(200).expect({ message: 'Welcome to api!' })
    })
  })

  afterAll(async () => {
    await app.close()
    await mySQLContainer.stop()
  })
})
