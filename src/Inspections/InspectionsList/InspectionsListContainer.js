import ListComponent from './InspectionsList'
import { storeNamespace, actions } from './app'
import makeListContainer from '../../List/makeListContainer'

export default makeListContainer(ListComponent, storeNamespace, actions)
