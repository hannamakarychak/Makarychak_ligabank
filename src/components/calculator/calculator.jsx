import Container from '../container/container';
import Heading from '../heading/heading';

const Calculator = () => {
  return (
    <section className="calculator">
      <Container>
        <Heading className="calculator__heading" secondary>
          Кредитный калькулятор
        </Heading>
      </Container>
    </section>
  );
};

export default Calculator;
