import { ButtonContainer, Label } from './buttonStyles'

export default function Button({ onPress, title }) {
  return (
    <ButtonContainer onPress={onPress} underlayColor="#d22">
      <Label>{title}</Label>
    </ButtonContainer>
  )
}
