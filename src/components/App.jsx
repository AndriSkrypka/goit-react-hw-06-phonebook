import { Form } from './Form/Form';

import Section from './Section/Section';

import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';



const App = () => {
  return (
    <div
      style={{
       fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export { App };


