import {
  CountryItem,
  Image,
  RemoveCardContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const CountryCardComponent = props => {
  const {countryDetails, removeVisitedCard} = props
  const {imageUrl, name, id} = countryDetails

  const onClickRemoveButton = () => removeVisitedCard(id)

  return (
    <CountryItem>
      <Image alt="thumbnail" src={imageUrl} />
      <RemoveCardContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemoveButton}>
          Remove
        </RemoveButton>
      </RemoveCardContainer>
    </CountryItem>
  )
}

export default CountryCardComponent
