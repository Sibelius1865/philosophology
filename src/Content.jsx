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
      <Section theme='What is Philosophology?'>
        Philosophology is the logic of the concept of PHILOSOPHY. The term is used for the relativisation of a variety of philosophies and the pursuit of her essence. 
      </Section>
      <Section theme='What is Philosophology?'>
        Philosophology is the logic of the concept of PHILOSOPHY. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
      </Section>
      <Section theme='What is Philosophology?'>
        Philosophology is the logic of the concept of PHILOSOPHY. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
      </Section>
      {/* <Section theme='What is Philosophology?'>
        Philosophology is the logic of the concept of PHILOSOPHY. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
      </Section>
      <Section theme='What is Philosophology?'>
        Philosophology is the logic of the concept of PHILOSOPHY. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
      </Section>
      <Section theme='What is Philosophology?'>
        Philosophology is the logic of the concept of PHILOSOPHY. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
      </Section>
      <Section theme='What is Philosophology?'>
        Philosophology is the logic of the concept of PHILOSOPHY. The term stands for the relativisation of a variety of philosophies and the pursuit of her essence. 
      </Section> */}
    </div>
  )
}

export default Content