import { useLocation } from "react-router-dom";


export default function MailContent() {
  const location = useLocation();
  const mail = location.state;
  console.log('content');
  console.log(location);
  console.log(mail);

  return (
    <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
  );
}