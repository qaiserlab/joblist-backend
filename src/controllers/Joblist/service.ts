import axios from 'axios'
import { Request } from 'express'

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
