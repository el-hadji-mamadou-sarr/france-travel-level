import type Departement from '@/utils/departement.interface'
import { extractNumber } from '@/utils/extractNumber'

const URL =
  'https://raw.githubusercontent.com/el-hadji-mamadou-sarr/jsonHost/main/departements-region.json'
export const getDptFromJSON = async (dpt: string): Promise<Departement | undefined> => {
  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  const json: Departement[] = await res.json()

  const targetObject = json.find((item) => item.num_dep == extractNumber(dpt))
  return targetObject
}
