import axios from 'axios'
import { Request } from 'express'

class JoblistService {
  /**
   *
   * @param req Request
   */
  public static async getAll(req: Request) {
    const url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json'
    
    const reqQuery = req.query

    const response = await axios.get(
      url,
      { params: reqQuery }
    )

    delete reqQuery.page

    const responseTotal = await axios.get(
      url,
      { params: reqQuery }
    )

    const data = response.data
    const total = responseTotal.data.length

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
