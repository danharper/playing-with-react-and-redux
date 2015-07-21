import PropertiesList from './PropertiesList'
import { storeNamespace, actions } from './app'
import makeListContainer from '../../List/makeListContainer'

export default makeListContainer(PropertiesList, storeNamespace, actions)
