import React from 'react'

import TextFilter from './TextFilter'
import SelectFilter from './SelectFilter'
import ClientsSelectFilter from './ClientsSelectFilter'

export function text(field: string, title: string) {
  return make(TextFilter, { field, title });
}

export function select(field: string, title: string, options: Map) {
  return make(SelectFilter, { field, title, options });
}

export function clientSelect(field: string, title: string) {
  return make(ClientsSelectFilter, { field, title });
}

function make(Component, { field, title, ...rest }) {
  return {
    field,
    make({ current, onChange, onActive, onInactive }) {
      return (
        <Component
          title={title}
          value={current}
          {...rest}
          onChange={v => onChange(field, v)}
          onActive={() => onActive(field)}
          onInactive={() => onInactive(field)} />
      )
    }
  }

}
