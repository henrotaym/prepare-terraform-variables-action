import {expect, test} from '@jest/globals'
import {ENVIRONMENT} from '../src/enums'
import getBucketUrl from '../src/utils/get-bucket-url'

test('production prefixes the app url with assets', () => {
  expect(getBucketUrl(ENVIRONMENT.PRODUCTION, 'worksite-api', 'main')).toBe(
    'assets-api.worksite.eu'
  )
})

test('staging prefixes the staging app url with assets', () => {
  expect(getBucketUrl(ENVIRONMENT.STAGING, 'worksite-api', 'staging')).toBe(
    'assets-staging-api.worksite.eu'
  )
})

test('acceptance prefixes the acceptance app url with assets', () => {
  expect(
    getBucketUrl(ENVIRONMENT.ACCEPTANCE, 'worksite-api', 'acceptance')
  ).toBe('assets-acceptance-api.worksite.eu')
})

test('local returns the docker localhost bucket url', () => {
  expect(getBucketUrl(ENVIRONMENT.LOCAL, 'worksite-api', 'foo')).toBe(
    'bucket-worksite-api.docker.localhost'
  )
})
