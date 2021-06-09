import React from 'react';
import Container from '../container/container';
import Input from '../input/input';

const Converter = () => {
 return (
   <Container>
     <div className="converter-form">
      <Input name="input-amount" id="input-amount" type="number" label="У меня есть"/>
      {/* <select name="currency">
        <option value="eur">RUB</option>
        <option value="eur">USD</option>
        <option value="eur">EUR</option>
        <option value="eur">GBP</option>
        <option value="eur">CNY</option>
      </select>
      <span>arrow</span>
      <span>arrow</span>
      <label for="output-amount">Хочу приобрести</label>
      <input type="number" id="output-amount" name="output-amount"></input> */}
    </div>
   </Container>
   
 )
}

export default Converter
