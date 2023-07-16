import { RequestHandler } from 'express'
import config from '../../config'

/**
 * Health check endpoint
 */
const getRoot: RequestHandler = (req, res) => {
    res.status(200).json({
        name: config.name,
        description: "A minimally opinionated typescript & express starter for 2023 with DOCKER +  CICD",
        version: config.version
    });
}

export default getRoot