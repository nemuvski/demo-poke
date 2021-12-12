/**
 * PokemonAPIに関する型
 *
 * ※必要な分のみ定義している
 */
declare namespace PokemonApi {
  type IdOrName = string | number

  interface List {
    count: number
    prev: string | null
    next: string | null
    results: Array<ListResult>
  }

  interface ListResult {
    name: string
    url: string
  }

  interface Single {
    id: number
    name: string
    sprites: {
      front_default: string
    }
  }
}
