import {ENVIRONMENT, Environment} from '../enums'
import getRawUrl from './get-raw-url'
import getShortBranchName from './get-short-branch-name'

const getAppUrl = (
  environment: Environment,
  appKey: string,
  branch: string
): string => {
  if (environment === ENVIRONMENT.LOCAL) return `${appKey}.docker.localhost`
  const url = getRawUrl(appKey)
  if (environment === ENVIRONMENT.PRODUCTION) return url
  if (environment === ENVIRONMENT.ACCEPTANCE) return `acceptance-${url}`
  if (environment === ENVIRONMENT.STAGING) return `staging-${url}`
  const branchName = getShortBranchName(branch)
  return `${branchName}-${url}`
}

export default getAppUrl
