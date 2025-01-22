import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chefs from './chefs'
import cartItems from './cartItems'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs, cartItems],
}
