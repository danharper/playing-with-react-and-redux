import { reducers as pr } from './Properties/PropertiesList'

import { reducers as ir } from './Inspections/InspectionsList'

import * as csr from './Filters/FilterInputs/ClientsSelectFilter/reducers'

export default {
  ...pr,
  ...ir,
  ...csr,
}
