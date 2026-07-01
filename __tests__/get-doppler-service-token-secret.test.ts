import {expect, test} from '@jest/globals'
import {ENVIRONMENT} from '../src/enums'
import getDopplerServiceTokenSecret from '../src/utils/get-doppler-service-token-secret'

test('production resolves the production token secret', () => {
  expect(getDopplerServiceTokenSecret(ENVIRONMENT.PRODUCTION, 'main')).toBe(
    'DOPPLER_SERVICE_TOKEN_PRODUCTION'
  )
})

test('staging resolves the staging token secret', () => {
  expect(getDopplerServiceTokenSecret(ENVIRONMENT.STAGING, 'staging')).toBe(
    'DOPPLER_SERVICE_TOKEN_STAGING'
  )
})

test('acceptance resolves the acceptance token secret', () => {
  expect(
    getDopplerServiceTokenSecret(ENVIRONMENT.ACCEPTANCE, 'acceptance')
  ).toBe('DOPPLER_SERVICE_TOKEN_ACCEPTANCE')
})

test('dev resolves a branch specific token secret', () => {
  expect(
    getDopplerServiceTokenSecret(ENVIRONMENT.DEV, 'dev/some_feature')
  ).toBe('DOPPLER_SERVICE_TOKEN_DEV_SOME_FEATURE')
})
