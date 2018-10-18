import React from 'react'
import { Wrapper, Warning } from '../../styles/global'

export default function Required () {
  return (
    <Wrapper>
      <Warning>
        Please select at least one main course! :)
      </Warning>
    </Wrapper>
  )
}

