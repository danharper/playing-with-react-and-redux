import React from 'react'

import TextFilter from './TextFilter'
import SelectFilter from './SelectFilter'
import ClientsSelectFilter from './ClientsSelectFilter'

export const TEXT = (filter, current, onChange, enable, disable) => (
  <TextFilter
    title={filter.name}
    field={filter.field}
    value={current}
    onChange={onChange}
    onActive={enable}
    onInactive={disable}
    // onChange={(x, value) => onChange(filter.field, value)}
    // onActive={(x) => enable(filter.field)}
    // onInactive={(x) => disable(filter.field)}
    />
)

export const SELECT = (filter, current, onChange, enable, disable) => (
  <SelectFilter
    title={filter.name}
    field={filter.field}
    value={current}
    onChange={onChange}
    onActive={enable}
    onInactive={disable}
    // onChange={(x, value) => onChange(filter.field, value)}
    // onActive={(x) => enable(filter.field)}
    // onInactive={(x) => disable(filter.field)}
    options={filter.options} />
)

export const CLIENT_SELECT = (filter, current, onChange, enable, disable) => (
  <ClientsSelectFilter
    title={filter.name}
    field={filter.field}
    value={current}
    onChange={onChange}
    onActive={enable}
    onInactive={disable}
    // onChange={(x, value) => onChange(filter.field, value)}
    // onActive={(x) => enable(filter.field)}
    // onInactive={(x) => disable(filter.field)}
    />
)
