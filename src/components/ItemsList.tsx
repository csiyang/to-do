import React from 'react'

import Item from './Item'
import {IForm, testData} from '../helpers/dataTypes'


function ItemsList () {
  return (
    <>
      {testData.map((item: IForm) => {
        return <Item {...item} key={item.id}/>
      })}
    </>
  )
}

export default ItemsList