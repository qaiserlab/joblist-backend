import axios from 'axios'
import { Request } from 'express'
import models from 'models'
import db from 'models/_instance'
// import ResponseError from '@expresso/modules/Response/ResponseError'
// import useValidation from '@expresso/hooks/useValidation'
// import { UserAttributes } from 'models/user'
// import { Transaction } from 'sequelize/types'
// import UserRoleService from 'controllers/UserRole/service'
// import PluginSqlizeQuery from '@expresso/modules/SqlizeQuery/PluginSqlizeQuery'
// import { isEmpty } from 'lodash'
// import { validateBoolean } from '@expresso/helpers/Common'
// import userSchema from './schema'

const { Sequelize } = db
const { Op } = Sequelize

const { User, Role, Session } = models
const including = [{ model: Role }]
const includeSession = [{ model: Role }, { model: Session }]

class JoblistService {
  /**
   *
   * @param req Request
   */
  public static async getAll(req: Request) {
    const response = await axios.get(
      'http://dev3.dansmultipro.co.id/api/recruitment/positions.json',
      { params: req.query }
    )

    const data = response.data
    const total = data.length

    return { message: `${total} data has been received.`, data, total }
  }

  /**
   *
   * @param id
   */
  public static async getOne(id: string) {
    const response = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
    )
    const data = response.data

    return data
  }

}

export default JoblistService
