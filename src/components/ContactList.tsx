import Contact from "./Contact";

type Props = {
  contacts: any;
};

const ContactList = (props: Props) => {
  console.log(props.contacts);
  return (
    <div className="pt-24 space-y-4">
      {props.contacts.map((contact: any, i: number) => (
        <Contact key={i} contact={contact.contact} id={contact.id} />
      ))}
    </div>
  );
};

export default ContactList;
