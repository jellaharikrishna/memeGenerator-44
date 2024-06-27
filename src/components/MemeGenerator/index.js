import {Component} from 'react'
import {
  MemeContainer,
  MemeHeading,
  MemesHeading,
  MemeImage,
  TextContent,
  MemeFormContainer,
  InputContainer,
  Label,
  TextInput,
  SelectTextInput,
  OptionInput,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    inputImageUrl: '',
    inputTopText: '',
    inputBottomText: '',
    inputFontSize: fontSizesOptionsList[0].displayText,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({inputImageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({inputTopText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({inputBottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({inputFontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      inputImageUrl,
      inputTopText,
      inputBottomText,
      inputFontSize,
    } = this.state

    this.setState({
      imageUrl: inputImageUrl,
      topText: inputTopText,
      bottomText: inputBottomText,
      fontSize: inputFontSize,
    })
  }

  render() {
    const {
      inputImageUrl,
      inputTopText,
      inputBottomText,
      inputFontSize,
      imageUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state

    return (
      <MemeContainer>
        <MemeHeading>Meme Generator</MemeHeading>

        <MemeImage data-testid="meme" imageUrl={imageUrl}>
          <TextContent fontSize={fontSize}>{topText}</TextContent>
          <TextContent fontSize={fontSize}>{bottomText}</TextContent>
        </MemeImage>

        <MemeFormContainer onSubmit={this.onSubmitForm}>
          <MemesHeading>Meme Generator</MemesHeading>
          <InputContainer>
            <Label htmlFor="imageUrl">Image URL</Label>
            <TextInput
              type="text"
              id="imageUrl"
              value={inputImageUrl}
              onChange={this.onChangeImageUrl}
              placeholder="Enter the Image URL"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="topText">Top Text</Label>
            <TextInput
              type="text"
              id="topText"
              value={inputTopText}
              onChange={this.onChangeTopText}
              placeholder="Enter the Top Text"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="bottomText">Bottom Text</Label>
            <TextInput
              type="text"
              id="bottomText"
              value={inputBottomText}
              onChange={this.onChangeBottomText}
              placeholder="Enter the Bottom Text"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="select">Font Size</Label>
            <SelectTextInput
              id="select"
              value={inputFontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <OptionInput
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                >
                  {eachOption.displayText}
                </OptionInput>
              ))}
            </SelectTextInput>
          </InputContainer>

          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeFormContainer>
      </MemeContainer>
    )
  }
}

export default MemeGenerator
