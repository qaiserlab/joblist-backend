import { Request, Response } from 'express'
import routes from 'routes/public'
import asyncHandler from '@expresso/helpers/asyncHandler'
import Authorization from 'middlewares/Authorization'
import BuildResponse from '@expresso/modules/Response/BuildResponse'
import JoblistService from 'controllers/Joblist/service'

routes.get(
  '/joblist',
  Authorization,
  asyncHandler(async function getAll(req: Request, res: Response) {
    const data = await JoblistService.getAll(req)
    const buildResponse = BuildResponse.get(data)

    return res.status(200).json(buildResponse)
  })
)

routes.get(
  '/joblist/:id',
  Authorization,
  asyncHandler(async function getOne(req: Request, res: Response) {
    const { id } = req.getParams()

    const data = await JoblistService.getOne(id)
    const buildResponse = BuildResponse.get({ data })

    return res.status(200).json(buildResponse)
  })
)

