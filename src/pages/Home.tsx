import { Fragment, useEffect, useState } from "react";
import ZeroContact from "../components/ZeroContact";
import ContactList from "../components/ContactList";

type Props = {};

const Home = (props: Props) => {
  const [contacts, updateContacts] = useState<any[]>([]);
  useEffect(() => {
    fetchContactsFromLocalStorage();
  }, []);

  const fetchContactsFromLocalStorage = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      updateContacts((arr: any) => [
        ...arr,
        {
          id: key,
          contact: value,
        },
      ]);
    }
  };
  return (
    <section className="max-w-md mx-auto">
      {contacts.length == 0 ? (
        <ZeroContact />
      ) : (
        <ContactList contacts={contacts} />
      )}
    </section>
  );
};

export default Home;
