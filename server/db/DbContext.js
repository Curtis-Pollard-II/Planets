import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxys = mongoose.model('Galaxy', AccountSchema);
  Stars = mongoose.model('Star', AccountSchema);
}

export const dbContext = new DbContext()
