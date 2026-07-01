import {expect, test} from '@jest/globals'
import {ENVIRONMENT} from '../src/enums'
import getAppUrl from '../src/utils/get-app-url'

test('production returns the raw url', () => {
  expect(getAppUrl(ENVIRONMENT.PRODUCTION, 'worksite-api', 'main')).toBe(
    'api.worksite.eu'
  )
})

test('staging prefixes the raw url with staging', () => {
  expect(getAppUrl(ENVIRONMENT.STAGING, 'worksite-api', 'staging')).toBe(
    'staging-api.worksite.eu'
  )
})

test('acceptance prefixes the raw url with acceptance', () => {
  expect(getAppUrl(ENVIRONMENT.ACCEPTANCE, 'worksite-api', 'acceptance')).toBe(
    'acceptance-api.worksite.eu'
  )
})

test('local returns the docker localhost url', () => {
  expect(getAppUrl(ENVIRONMENT.LOCAL, 'worksite-api', 'foo')).toBe(
    'worksite-api.docker.localhost'
  )
})
