import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 20px 60px;
  background-color: #161624;
  padding-bottom: 20px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 25px;
`
export const CountriesListContainer = styled.div`
  display: flex;
`
export const CountryList = styled.ul`
  padding: 0px;
  list-style-type: none;
  border-radius: 6px;
  width: 100%;
  height: 42vh;
  overflow-y: scroll;
`
export const VisitedCountriesListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  list-style-type: none;
  min-height: 30vh;
`
export const NoVisitedList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
`
export const NoHeading = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 25px;
`
