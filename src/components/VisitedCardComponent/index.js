import {
  ListElement,
  CountryName,
  VisitedButton,
  VisitedParagraph,
} from './styledComponents'

const VisitedCardComponent = props => {
  const {eachItem, markVisited} = props
  const {name, id, isVisited} = eachItem

  const onClickVisited = () => markVisited(id)

  return (
    <ListElement>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedParagraph>Visited</VisitedParagraph>
      ) : (
        <VisitedButton onClick={onClickVisited} type="button">
          Visit
        </VisitedButton>
      )}
    </ListElement>
  )
}

export default VisitedCardComponent
