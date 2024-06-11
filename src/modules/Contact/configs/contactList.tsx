import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';

type ContactItemConfigType = {
  displayName: string;
  displayIndex: string;
  url: string;
  icon: React.FC;
};

type ContactListConfigType = ContactItemConfigType[];

const contactListConfig: ContactListConfigType = [
  {
    displayName: 'GitHub',
    displayIndex: '01',
    url: 'https://github.com/BlueRexPY',
    icon: GithubFilled,
  },
  {
    displayName: 'LinkedIn',
    displayIndex: '02',
    url: 'https://www.linkedin.com/in/ruslan-rystsov/',
    icon: LinkedinFilled,
  },
  {
    displayName: 'Email',
    displayIndex: '03',
    url: 'https://mail.google.com/mail/u/0/?source=mailto&to=ruslanryscovbluerex@gmail.com&fs=1&tf=cm',
    icon: MailFilled,
  },
];

export { contactListConfig };
export type { ContactListConfigType, ContactItemConfigType };
