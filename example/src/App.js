import React from 'react'

import {
  ButtonGroup,
  ButtonG,
  Dropdown,
  Textarea,
  TextMuted,
  Text,
  ButtonSM,
  ButtonLG,
  Title,
  BoxMorph,
  Box,
  Grid,
  Loading,
  RegularCheckboxIOS,
  RegularCheckbox,
  CircleProgress,
  Progress,
  Chart,
  ExampleComponent,
  ButtonIconRounded,
  Button,
  ButtonIL,
  ButtonIR,
  Select,
  Radio,
  ButtonSq,
  ButtonPressed,
  ButtonwIcon,
  ButtonSmallL,
  ButtonSmallR,
  Input,
  Checkbox
} from 'neum-ui'
import 'neum-ui/dist/index.css'

const App = () => {
  let deneme = true
  let degerler = [50, 20, 75, 30, 85, 10, 99, 2]
  const onChangeInput = () => {
    console.log(this)
  }
  return (
    <>
      <table >
        <tr>
          <td>Titles</td>
          <td>Button Size</td>
          <td>Button variations</td>
          <td>Checkbox variations</td>
          <td>Square Button variations</td>
        </tr>
        <tr>
          <td>
            <Title hL={1}>Title Variations</Title>
            <br />
            <Title hL={2}>Title Variations</Title>
            <br />
            <Title hL={3}>Title Variations</Title>
            <br />
            <Title hL={4}>Title Variations</Title>
            <br />
            <Title hL={5}>Title Variations</Title>
            <br />
            <Title hL={6}>Title Variations</Title>
            <br />
          </td>
          <td>
            <ButtonSM href={'hamiberkayaktas.tk'}>This is Button</ButtonSM>
            <br />
            <Button href={'hamiberkayaktas.tk'}>This is Button</Button>
            <br />
            <ButtonLG href={'hamiberkayaktas.tk'}>This is Button</ButtonLG>
            <br />
          </td>
          <td>
            <Button href={'hamiberkayaktas.tk'}>This is Button</Button>
            <ButtonPressed>Pressed Button</ButtonPressed>
            <br />

            <ButtonIL icon='fas fa-user-plus'>
              Button with Left side icon 
            </ButtonIL>
            <br />
            <ButtonIR icon='fas fa-user-plus'>
              Button with Right side icon 
            </ButtonIR>
            <br />
            <ButtonwIcon icon='fas fa-arrow-right' />
            <ButtonwIcon icon='fas fa-arrow-left' />
            <br />

            <ButtonSmallL icon='fas fa-share-alt'> Share</ButtonSmallL>
            <br />
            <ButtonSmallR icon='fas fa-map-marker-alt'> Label</ButtonSmallR>
          </td>
          <td>
            <RegularCheckboxIOS>Ios Checkbox</RegularCheckboxIOS>
            <br />
            <RegularCheckboxIOS checked={true}>Ios Checkbox</RegularCheckboxIOS>
            <br />
            <RegularCheckbox>Regular Checkbox</RegularCheckbox>
            <br />
            <RegularCheckbox checked={true}>Regular Checkbox</RegularCheckbox>
          </td>
          <td>
            <ButtonSq>Aa</ButtonSq>
            <br />
          </td>
        </tr>
        <tr>
          <td>Form Component</td>
          <td>Chart Component</td>
          <td>Progress Component</td>
          <td>Text Component</td>
          <td>Other Component</td>
        </tr>
        <tr>
          <td>
            <Input placeholder='Search For ...' />
            <ButtonIconRounded icon='fas fa-search' />
            <br />
            <Select name='cars' id='cars'>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </Select>
            <br />
            <Radio>Radio form component</Radio><br/>
            <Radio checked={true}>Radio form component</Radio><br/>
            <Textarea placeholder='Textarea Component ......'></Textarea>
          </td>
          <td>
            <Chart
              degerler={[50, 20, 75, 30, 85, 10, 99, 5]}
              w={'200px'}
              h={'200px'}
            />
          </td>
          <td>
            <Progress value={38} w={'250px'} h={'10px'} />
            <CircleProgress value={77} w={'200px'} h={'200px'} />
            <CircleProgress value={32} w={'100px'} h={'100px'} />
            <Loading w={'50px'} h={'50px'} />
          </td>
          <td>
          <Title hL={2}>Title Variations</Title><br/>
          <Text>Text Component</Text>
          <TextMuted>Text Muted Component</TextMuted>
          </td>
          <td>
            Grid Component<br/>
  
            <Grid col={5} rows={3} w={'100%'} key={1}>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
            </Grid>
          </td>
        </tr>
        <tr>
          <td>
            <Dropdown>{[{link:'www.twitter.com',content:'Twitter'},{link:'www.facebook.com',content:'Facebook'},{link:'www.youtube.com',content:'Youtube'}]}</Dropdown>
            <Dropdown>{[{link:'www.twitter.com',content:'Twitter'},{link:'www.facebook.com',content:'Facebook'},{link:'www.youtube.com',content:'Youtube'}]}</Dropdown>
          </td>
          <td>
            <ButtonGroup>
              <ButtonG href={'/1'}>1</ButtonG>
              <ButtonG href={'/2'}>2</ButtonG>
              <ButtonG href={'/3'}>3</ButtonG>
            </ButtonGroup>
          </td>
        </tr>
      </table>
      <Grid col={3} rows={3} key={2}>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
              <Box style={{background:'Red'}}>.</Box>
            </Grid>
      <Box>div denemesi</Box>
      <BoxMorph style={{ width: '500px' }}>
        <Title hL={3}>Title Variations</Title>
        <br></br>div denemesi
        <br />
        asdasddasas
      </BoxMorph>
      <Grid col={3} row={6} w={'100%'} key={4}>
        <ButtonSq><i className='fas fa-share-alt'></i></ButtonSq>
        <Loading w={'50px'} h={'50px'} />
        <RegularCheckboxIOS>oldumu</RegularCheckboxIOS>
        <RegularCheckboxIOS checked={true}>oldumu</RegularCheckboxIOS>
        <Button href={'hamiberkayaktas.tk'}>This is Button</Button>
        <ButtonPressed>Pressed Button</ButtonPressed>

        <ButtonIL icon='fas fa-user-plus'>Bu bir Soldan iconlu Buton</ButtonIL>
        <ButtonIR icon='fas fa-user-plus'>Bu bir Sağdan iconlu Buton</ButtonIR>
        <ButtonwIcon icon='fas fa-arrow-right' />
        <ButtonwIcon icon='fas fa-arrow-left' />

        <ButtonSmallL icon='fas fa-share-alt'> Share</ButtonSmallL>
        <ButtonSmallR icon='fas fa-map-marker-alt'> Label</ButtonSmallR>
        <Input placeholder='merhaba' />
        <ButtonIconRounded icon='fas fa-search' />
        {/* <Checkbox >Açıklama</Checkbox>
      <Checkbox checked={true}>Açıklama</Checkbox>  */}
        <Select name='cars' id='cars'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </Select>
        <Radio>deneme</Radio>
        <Radio checked={true}>deneme</Radio>

        <Chart
          degerler={[50, 20, 75, 30, 85, 10, 99, 5]}
          w={'200px'}
          h={'200px'}
        />
        <Progress value={38} w={'250px'} h={'10px'} />
        <CircleProgress value={77} w={'200px'} h={'200px'} />
        <RegularCheckbox>One</RegularCheckbox>
        <RegularCheckbox checked={true}>Deneme</RegularCheckbox>
      </Grid>
      <ExampleComponent text='Create React Library Example 😄' />

      <ButtonSq>AI</ButtonSq>
      <Loading w={'50px'} h={'50px'} />
      <RegularCheckboxIOS>oldumu</RegularCheckboxIOS>
      <RegularCheckboxIOS checked={true}>oldumu</RegularCheckboxIOS>
      <Button href={'hamiberkayaktas.tk'}>This is Button</Button>
      <ButtonPressed>Pressed Button</ButtonPressed>

      <ButtonIL icon='fas fa-user-plus'>Bu bir Soldan iconlu Buton</ButtonIL>
      <ButtonIR icon='fas fa-user-plus'>Bu bir Sağdan iconlu Buton</ButtonIR>
      <ButtonwIcon icon='fas fa-arrow-right' />
      <ButtonwIcon icon='fas fa-arrow-left' />

      <ButtonSmallL icon='fas fa-share-alt'> Share</ButtonSmallL>
      <ButtonSmallR icon='fas fa-map-marker-alt'> Label</ButtonSmallR>
      <Input placeholder='merhaba' />
      <ButtonIconRounded icon='fas fa-search' />
      {/* <Checkbox >Açıklama</Checkbox>
      <Checkbox checked={true}>Açıklama</Checkbox>  */}
      <Select name='cars' id='cars'>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='mercedes'>Mercedes</option>
        <option value='audi'>Audi</option>
      </Select>
      <Radio>deneme</Radio>
      <Radio checked={true}>deneme</Radio>

      <Chart
        degerler={[50, 20, 75, 30, 85, 10, 99, 5]}
        w={'200px'}
        h={'200px'}
      />
      <Progress value={38} w={'250px'} h={'10px'} />
      <CircleProgress value={77} w={'200px'} h={'200px'} />
      <RegularCheckbox>One</RegularCheckbox>
      <RegularCheckbox checked={true}>Deneme</RegularCheckbox>
      <Dropdown>{[{link:'www.twitter.com',content:'Twitter'},{link:'www.facebook.com',content:'Facebook'},{link:'www.youtube.com',content:'Youtube'}]}</Dropdown>

    </>
  )
}

export default App
