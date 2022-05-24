import React from 'react'

import { RegularCheckboxIOS,RegularCheckbox,CircleProgress,Progress,Chart,ExampleComponent,ButtonIconRounded, Button, ButtonIL,ButtonIR, Select,Radio,ButtonSq,ButtonPressed,ButtonwIcon,ButtonSmallL,ButtonSmallR,Input,Checkbox } from 'neum-ui'
import 'neum-ui/dist/index.css'

const App = () => {
  let deneme = true;
  let degerler = [50,20,75,30,85,10,99,2];
  const onChangeInput = () =>{
    console.log(this);
  }
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <ButtonSq>AI</ButtonSq>
      <RegularCheckboxIOS>oldumu</RegularCheckboxIOS>
      <RegularCheckboxIOS checked={true}>oldumu</RegularCheckboxIOS><br/>
      <Button href={"hamiberkayaktas.tk"}>Bu bir buton</Button>
      <ButtonPressed>Pressed Button</ButtonPressed>
      <br />
      <ButtonIL icon='fas fa-user-plus'>Bu bir Soldan iconlu Buton</ButtonIL>
      <ButtonIR icon='fas fa-user-plus'>Bu bir Sağdan iconlu Buton</ButtonIR><br/>
      <ButtonwIcon icon='fas fa-arrow-right'/>
      <ButtonwIcon icon='fas fa-arrow-left'/>
      
      <ButtonSmallL icon='fas fa-share-alt'> Share</ButtonSmallL>
      <ButtonSmallR icon='fas fa-map-marker-alt'> Label</ButtonSmallR><br/>
      <Input placeholder='merhaba' /><ButtonIconRounded icon='fas fa-search'/><br/>
      {/* <Checkbox >Açıklama</Checkbox><br/>
      <Checkbox checked={true}>Açıklama</Checkbox> <br/> */}
      <Select name='cars' id='cars'>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='mercedes'>Mercedes</option>
        <option value='audi'>Audi</option>
      </Select><br/>
      <Radio>deneme</Radio><br/>
      <Radio checked={true}>deneme</Radio><br/>
      
      <Chart degerler={[50,20,75,30,85,10,99,5]} w={'200px'} h={'200px'}/><br/>
      <Progress value={38}  w={'250px'} h={'10px'} />
      <CircleProgress value={77} w={'200px'} h={'200px'} />
      <RegularCheckbox>One</RegularCheckbox>
      <RegularCheckbox checked={true}>Deneme</RegularCheckbox>
      
    </>
  )
}

export default App
