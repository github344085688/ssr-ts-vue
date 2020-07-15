import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { GET_IN_FO } from './type/action'
import { AUTHORS_SET_COLLECTION } from './type/mutation'
import rxax from '../../../axios/rxToaxios'
export default <ActionTree<State, any>> {
  async  [GET_IN_FO] ({ commit, rootState }: ActionContext<State, any>) {
    commit(AUTHORS_SET_COLLECTION, [await new Promise((resolve, reject) => {
        /*rxax.post('/newList-select-by-paging', {
        'col01': '76',
        'col02': '76'
      }).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          reject(err)
        }
      )*/
        let data = {
            "a": {
                "data": [
                    {
                        "col01": "73",
                        "col02": "d"
                    },
                    {
                        "col01": "76",
                        "col02": "d"
                    },
                    {
                        "col01": "76",
                        "col02": "d"
                    },
                    {
                        "col01": "72",
                        "col02": "d"
                    },
                    {
                        "col01": "76",
                        "col02": "d"
                    },
                    {
                        "col01": "72",
                        "col02": "d"
                    },
                    {
                        "col01": "72",
                        "col02": "d"
                    },
                    {
                        "col01": "73",
                        "col02": "d"
                    },
                    {
                        "col01": "76",
                        "col02": "d"
                    },
                    {
                        "col01": "76",
                        "col02": "d"
                    }
                ],
                "paging": {
                    "endIndex": 10,
                    "limit": 10,
                    "startIndex": 0,
                    "pageNo": 1,
                    "totalcount": 887,
                    "totalPage": 89
                }
            }
        };
        resolve(data);
    })])
  }
}
