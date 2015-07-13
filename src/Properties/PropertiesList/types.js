const make = actionType => [
  actionType, actionType + '_SUCCESS', actionType + '_ERROR'
]

export const FILTER_CHANGED = 'PROPERTIES_LIST_FILTER_CHANGED'

export const FETCH_PROPERTIES = make('FETCH_PROPERTIES_LIST')
