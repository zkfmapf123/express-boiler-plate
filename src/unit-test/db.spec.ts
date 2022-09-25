import { Shop } from '#bases/model'
import { modelMapper, modelsMapper } from '#utils/mapper'

/**
 * @todo mock data
 */
describe('db test', () => {
  it('shop-model', async () => {
    const shop = await modelMapper(
      {
        query: 'select * from Shops where name = ?',
        params: ['test_1'],
      },
      Shop
    )

    if (shop) {
      expect(shop.id).toBe(1)
      expect(shop.name).toBe('test_1')
      expect(shop.address).toBe('test_1_address')
    }
  })

  it('shop-models', async () => {
    const shops = await modelsMapper(
      {
        query: 'select * from Shops',
      },
      Shop
    )

    if (shops) {
      expect(shops.length).toBe(4)
    }
  })

  it('shop no data', async () => {
    const shop = await modelMapper(
      {
        query: 'select * from Shops where name = ?',
        params: ['test_123123'],
      },
      Shop
    )

    expect(shop).toBe(null)
  })

  it('shop invalid query', async () => {
    const shop = await modelMapper(
      {
        query: 'select * from Shops wherasdfe name = ?',
        params: ['test_123123'],
      },
      Shop
    )

    expect(shop).toBe(null)
  })
})
