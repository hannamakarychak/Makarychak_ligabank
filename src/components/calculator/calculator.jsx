import Container from '../container/container';
import Form from '../form/form';
import Heading from '../heading/heading';

import './calculator.scss';

const Calculator = () => {
  return (
    <section className="calculator">
      <Container>
        <Heading className="calculator__heading" secondary>
          Кредитный калькулятор
        </Heading>
        <Form />
      </Container>
    </section>
  );
};

export default Calculator;
