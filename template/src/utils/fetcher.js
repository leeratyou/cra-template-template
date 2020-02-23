/* eslint-disable */
import { Fetchme, keyConvert } from '@supersimplethings/fetchme'
import { snakeCase, camelCase } from 'change-case'

const toSnakeCase = keyConvert(snakeCase)
const toCamelCase = keyConvert(camelCase)

const api = {
  name: 'name',
  domain: process.env.REACT_APP_API,
  endpoints: {
    some: () => '/endpoint'
  }
}

const fetchme = new Fetchme(api)
  .useApi('name')
  // .addMiddleware('resolve', toCamelCase)
  // .addMiddleware('body', toSnakeCase)

export default fetchme
