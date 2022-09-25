/**
 * Top Implementation
 */

import { Router } from 'express'

export interface IModels {
  deserialize(): this
}

export interface IController {
  _prefix: string
  initRoutes(): [string, Router]
}

export interface IService {}

export interface IRepository<T> {
  findOne(property: keyof T): Promise<T>
  findAll(property: keyof T): Promise<T[]>
}
