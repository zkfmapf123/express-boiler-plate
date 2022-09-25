import { IModels } from '#bases/interface'
import { alias, serializable, serialize } from 'serializr'

/**
 * Shop
 */
export class Shop implements IModels {
  @serializable id: number
  @serializable name: string
  @serializable address: string
  @serializable(alias('created_at')) createdAt: number
  @serializable(alias('updated_at')) updatedAt: number

  constructor(data: any) {
    this.id = data?.id
    this.name = data?.name
    this.address = data?.address
    this.updatedAt = data?.updated_at ?? null
    this.createdAt = data?.created_at ?? null
  }

  deserialize(): this {
    return serialize(this)
  }
}

/**
 * Menu
 */
export class Menu implements IModels {
  id: number
  @serializable(alias('shop_id')) shopId: number
  @serializable(alias('food_name')) foodName: string

  constructor(data: any) {
    this.id = data?.id
    this.shopId = data?.shop_id
    this.foodName = data?.food_name
  }

  deserialize(): this {
    return serialize(this)
  }
}

/**
 * Order
 */
export class Order implements IModels {
  id: number
  shopId: number
  address: string
  @serializable(alias('order_at')) orderAt: number
  @serializable(alias('confirm_at')) confirmAt: number

  constructor(data: any) {
    this.id = data?.id
    this.shopId = data?.shop_id
    this.address = data?.address
    this.orderAt = data?.order_at
    this.confirmAt = data?.confirm_at ?? null
  }

  deserialize(): this {
    return serialize(this)
  }
}

/**
 * OrderFood
 */
export class OrderFood implements IModels {
  @serializable(alias('order_id')) orderId: number
  @serializable(alias('menu_id')) menuId: number

  constructor(data: any) {
    this.orderId = data?.order_id
    this.menuId = data?.menu_id
  }

  deserialize(): this {
    return serialize(this)
  }
}
