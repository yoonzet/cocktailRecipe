import React from 'react'
import styled from 'styled-components'
import RandomCocktail from '../components/RandomCocktail'


const Div = styled.div`
  height: 100vh;
`


function Explore() {
  return (
    <Div>
      <RandomCocktail/>

    </Div>
  )
}

export default Explore