import {Enum} from '../types'

export const ENVIRONMENT = {
  PRODUCTION: 'production',
  ACCEPTANCE: 'acceptance',
  DEV: 'dev',
  STAGING: 'staging',
  LOCAL: 'local'
} as const

export type Environment = Enum<typeof ENVIRONMENT>
