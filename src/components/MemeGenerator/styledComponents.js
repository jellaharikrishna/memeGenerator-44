import styled from 'styled-components'

export const MemeContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-item: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`
export const MemeHeading = styled.h1`
  color: #35469c;
  font-family: Open Sans;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MemesHeading = styled.h1`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    color: #35469c;
    font-family: Open Sans;
    text-align: center;
  }
`

export const MemeImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 45%;
    height: 80vh;
    align-item: center;
  }
`
export const TextContent = styled.p`
  color: white;
  text-align: center;
  font-family: Open Sans;
  font-size: ${props => props.fontSize}px;
`

export const MemeFormContainer = styled.form`
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const Label = styled.label`
  color: #7e858e;
  font-family: Open Sans;
  font-size: 14px;
  margin-bottom: 5px;
`
export const TextInput = styled.input`
  padding: 5px;
  padding-left: 5px;
  border: 1.5px solid #d7dfe9;
  border-radius: 4px;
  outline: none;
`
export const SelectTextInput = styled.select`
  padding: 5px;
  padding-left: 5px;
  border: 1.5px solid #d7dfe9;
  border-radius: 4px;
  outline: none;
`
export const OptionInput = styled.option``

export const GenerateButton = styled.button`
  height: 35px;
  width: 160px;
  color: white;
  background-color: #0b69ff;
  border-width: 0px;
  border-radius: 4px;
`
