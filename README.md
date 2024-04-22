# Eslint config
This package was created so I don't have to copy paste my eslint config from one repository to the other.
It is publicly available on npm: https://www.npmjs.com/package/csabbee-eslint-config

## How to use it
Not much to it really, for the ease of use, you would need at least I believe `eslint@8.57.0`

That's when they introduced the flat config structure, so using the config would be this:

eslint.config.js file:
```javascript
import baseConfig from 'csabbee-eslint-config'

export default [
  ...baseConfig
]
```

Following the new eslint way, you could override any of the rules the, e.g.:
```javascript
import baseConfig from 'csabbee-eslint-config'

export default [
  ...baseConfig,
  {
    '@stylistic/quotes': ['error', 'single'],
  },
]
```