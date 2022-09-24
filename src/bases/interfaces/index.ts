/**
 * Top Implementation
 */

import { Router } from 'express'

export interface IController {
  _prefix: string
  initRoutes(): [string, Router]
}

export interface IService {}

export interface IRepository {}
