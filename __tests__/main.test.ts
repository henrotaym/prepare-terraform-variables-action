// import {wait} from '../src/wait'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

// test('throws invalid number', async () => {
//   const input = parseInt('foo', 10)
//   await expect(wait(input)).rejects.toThrow('milliseconds not a number')
// })

// shows how the runner will run a javascript action with env / stdout protocol
test('test production environment', () => {
  process.env['INPUT_APP_KEY'] = 'worksite-subscription'
  process.env['INPUT_GITHUB_BRANCH'] = 'refs/heads/main'
  // process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  // process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test staging environment', () => {
  process.env['INPUT_APP_KEY'] = 'worksite-subscription'
  process.env['INPUT_GITHUB_BRANCH'] = 'refs/heads/release/v1.0'
  // process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  // process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test dev environment', () => {
  process.env['INPUT_APP_KEY'] = 'worksite-subscription'
  process.env['INPUT_GITHUB_BRANCH'] =
    'refs/heads/dev/mathieuhenrotay_set_first_name'
  // process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  // process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test local environment', () => {
  process.env['INPUT_APP_KEY'] = 'worksite-subscription'
  process.env['INPUT_GITHUB_BRANCH'] =
    'refs/heads/mathieuhenrotay_set_first_name'
  // process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  // process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test trustup be environment', () => {
  process.env['INPUT_APP_KEY'] = 'trustup-be-dashboard'
  process.env['INPUT_GITHUB_BRANCH'] = 'refs/heads/release/v1'
  // process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  // process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test trustup be environment', () => {
  process.env['INPUT_APP_KEY'] = 'trustup-io-leads-synchronizer'
  process.env['INPUT_GITHUB_BRANCH'] = 'refs/heads/release/v1'
  // process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  // process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test trustup pro environment', () => {
  process.env['INPUT_APP_KEY'] = 'trustup-pro-leads-synchronizer'
  process.env['INPUT_GITHUB_BRANCH'] = 'refs/heads/release/v1'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test staging branch matches staging environment', () => {
  process.env['INPUT_APP_KEY'] = 'trustup-io-leads-synchronizer'
  process.env['INPUT_GITHUB_BRANCH'] = 'refs/heads/staging'
  // process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  // process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  // process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})

test('test acceptance environment', () => {
  process.env['INPUT_APP_KEY'] = 'worksite-api'
  process.env['INPUT_GITHUB_BRANCH'] = 'refs/heads/acceptance'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  const output = cp.execFileSync(np, [ip], options).toString()
  console.log(output)
  expect(output).toContain('acceptance')
})
