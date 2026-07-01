import {expect, test} from '@jest/globals'
import {ENVIRONMENT} from '../src/enums'
import getEnvironmentName from '../src/utils/get-environment-name'

test('main branch maps to production', () => {
  expect(getEnvironmentName('main')).toBe(ENVIRONMENT.PRODUCTION)
})

test('staging branch maps to staging', () => {
  expect(getEnvironmentName('staging')).toBe(ENVIRONMENT.STAGING)
})

test('release branch maps to staging', () => {
  expect(getEnvironmentName('release/v1.0')).toBe(ENVIRONMENT.STAGING)
})

test('acceptance branch maps to acceptance', () => {
  expect(getEnvironmentName('acceptance')).toBe(ENVIRONMENT.ACCEPTANCE)
})

test('dev branch maps to dev', () => {
  expect(getEnvironmentName('dev/some_feature')).toBe(ENVIRONMENT.DEV)
})

test('any other branch maps to local', () => {
  expect(getEnvironmentName('some_feature')).toBe(ENVIRONMENT.LOCAL)
})
