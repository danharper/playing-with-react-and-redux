import React from 'react'

import TextFilter from './TextFilter'
import SelectFilter from './SelectFilter'
import ClientsSelectFilter from './ClientsSelectFilter'

export const TEXT = (filter, current, onChange) => (
  <TextFilter
    title={filter.name}
    field={filter.field}
    value={current}
    onChange={onChange} />
)

export const SELECT = (filter, current, onChange) => (
  <SelectFilter
    title={filter.name}
    field={filter.field}
    value={current}
    onChange={onChange}
    options={filter.options} />
)

export const CLIENT_SELECT = (filter, current, onChange) => (
  <ClientsSelectFilter
    title={filter.name}
    field={filter.field}
    value={current}
    onChange={onChange} />
)
