const make = actionType => [
  actionType, actionType + '_SUCCESS', actionType + '_ERROR'
]

export const FILTER_CHANGED = 'INSPECTIONS_LIST_FILTER_CHANGED'

export const PAGE_CHANGED = 'INSPECTIONS_LIST_PAGE_CHANGED'

export const FETCH_INSPECTIONS = make('FETCH_INSPECTIONS_LIST')
