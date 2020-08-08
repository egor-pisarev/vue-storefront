import toString from 'lodash/toString'
import omit from 'lodash/omit'

/**
 * Counts how much coniguration match for specific variant
 */
export default function getConfigurationMatchLevel (configuration, variant): number {
  if (!variant || !configuration) return 0
  const configProperties = Object.keys(omit(configuration, ['price']))
  let score = 0

  configProperties
    .map(configProperty => {
      const variantPropertyId = variant[configProperty]
      if (configuration[configProperty] !== null && configuration[configProperty].id === variantPropertyId) {
        if (configuration[configProperty].priority) {
          score += configuration[configProperty].priority
          return
        }
        score += 1
      }
    })

  return score
}
