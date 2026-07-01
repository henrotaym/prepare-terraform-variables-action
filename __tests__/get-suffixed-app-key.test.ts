import {expect, test} from '@jest/globals'
import {ENVIRONMENT} from '../src/enums'
import getSuffixedAppKey from '../src/utils/get-suffixed-app-key'

test('production keeps the raw app key', () => {
  expect(
    getSuffixedAppKey('worksite-api', ENVIRONMENT.PRODUCTION, 'main')
  ).toBe('worksite-api')
})

test('staging appends staging suffix', () => {
  expect(
    getSuffixedAppKey('worksite-api', ENVIRONMENT.STAGING, 'staging')
  ).toBe('worksite-api-staging')
})

test('acceptance appends acceptance suffix', () => {
  expect(
    getSuffixedAppKey('worksite-api', ENVIRONMENT.ACCEPTANCE, 'acceptance')
  ).toBe('worksite-api-acceptance')
})

test('local appends local suffix', () => {
  expect(getSuffixedAppKey('worksite-api', ENVIRONMENT.LOCAL, 'foo')).toBe(
    'worksite-api-local'
  )
})

test('dev appends short branch name suffix', () => {
  expect(
    getSuffixedAppKey('worksite-api', ENVIRONMENT.DEV, 'dev/some_feature')
  ).toBe('worksite-api-dev-some-feature')
})
