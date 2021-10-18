import React from 'react'
import Container from '@mui/material/Container'

import Item from './Item'
import {IForm, testData} from '../helpers/dataTypes'


function ItemsList () {
  const styles = {
    display: 'grid',
    justifyItems: 'center'
  }


  return (
    <Container style={styles}>
      {testData.map((item: IForm) => {
        return <Item {...item} key={item.id}/>
      })}
    </Container>
  )
}

export default ItemsList