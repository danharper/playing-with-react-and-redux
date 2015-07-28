export const makeAsyncTypes = type => [
  type, `${type}(SUCCESS)`, `${type}(ERROR)`
]

export const asyncLevels = [ 0, 1, 2 ] // PENDING, SUCCESS, ERROR
