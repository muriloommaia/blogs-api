import shell from 'shelljs'
import { start } from '../src'

describe('First Describe', () => {
  it('First it', async () => {
    expect(start()).toBe('Hello Typescript')
    shell.exec('npx sequelize db:create')
    
  })
})
