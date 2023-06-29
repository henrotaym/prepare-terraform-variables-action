import {APP_GROUP} from '../enums'
import isAppInGroup from './is-app-in-group'

const getRawUrl = (appKey: string): string => {
  const isWorksite = isAppInGroup(appKey, APP_GROUP.WORKSITE)
  const raw = appKey.split('-').reverse()
  // Adding "eu" extension since worksite app do not include it.
  if (isWorksite) raw.splice(1, 0, 'eu')
  const extension = raw.splice(-2).reverse()
  return [...raw, ...extension].join('.')
}

export default getRawUrl
