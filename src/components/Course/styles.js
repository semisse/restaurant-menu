import styled, { css } from 'styled-components'
import Chilli from '../../img/spice.svg'
import Close from '../../img/close.svg'

export const Column = styled.div`
  display: grid;
  grid-template-columns: 19rem 19rem 19rem;
  grid-gap: 2.5rem;
  grid-column-gap: 1.25rem;
  justify-content: center;
`

export const CourseImage = styled.div`
  width: 100%;
  height: 10rem;
  background-position: center center;
  background-size: cover;
`

export const Description = styled.p`
  line-height: 1.5rem;
`

export const Spice = styled.span`
  width: 1.25rem;
  height: 1.5625rem;
  background-image: url(${Chilli});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
`

export const Card = styled.div`
      height: 28rem;
      transition: all .2s;
      padding: .75rem;
      position: relative;
      transition: outline .1s ease;
      &:hover{
        box-shadow: 0 0.3125rem 0.625rem 0.0625rem rgba(0,0,0,0.20);
      }
      ${({ selected }) => selected && css`
        outline: thick solid #539480;
        &:after{
          position: absolute;
          top: -0.9rem;
          right: -0.8rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background: white url(${Close}) no-repeat center center;
          background-size: 50%;
          border: 0.125rem solid #B2B2B2;
          content: '';
        }
      `}
    `