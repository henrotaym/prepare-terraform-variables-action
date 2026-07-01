import {ENVIRONMENT, Environment} from '../enums'
import getShortBranchName from './get-short-branch-name'

const getSuffixedAppKey = (
  appKey: string,
  environment: Environment,
  branch: string
): string => {
  if (environment === ENVIRONMENT.PRODUCTION) return appKey
  if (environment === ENVIRONMENT.ACCEPTANCE) return `${appKey}-acceptance`
  if (environment === ENVIRONMENT.STAGING) return `${appKey}-staging`
  if (environment === ENVIRONMENT.LOCAL) return `${appKey}-local`
  const suffix = getShortBranchName(branch)
  return `${appKey}-${suffix}`
}

export default getSuffixedAppKey
