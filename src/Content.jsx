const Section = ({theme, children}) => (
  <div className="section"> 
    <div className="theme">{theme}</div>
    <div className="text">
      {children}
    </div>
  </div>
)

const Content = () => {
  return (
    <div className='content'>
      <div className="unit-1">
        <Section theme='What is PHILOSOPHOLOGY?'>
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term is used for the relativisation of a variety of philosophies and the pursuit of her essence. 
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term is used for the relativisation of a variety of philosophies and the pursuit of her essence. 
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term is used for the relativisation of a variety of philosophies and the pursuit of her essence. 
        </Section>
        <Section theme='What is PHILOSOPHOLOGY?'>
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        </Section>
        <Section theme='What is PHILOSOPHOLOGY?'>
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        </Section>
      </div>
      <div className="unit-2">
        <Section theme='What is PHILOSOPHOLOGY?'>
          PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term is used for the relativisation of a variety of philosophies and the pursuit of her essence. 
        </Section>
        <Section theme='What is PHILOSOPHOLOGY?'>
          PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        </Section>
        <Section theme='What is PHILOSOPHOLOGY?'>
          PHILOSOPHOLOGY is the logic of the concept of Philosophy. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
        </Section>
      </div>
    </div>
  )
}

export default Content