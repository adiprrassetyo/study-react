import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen">
      {/* flex */}
      <div className="max-w-2xl flex items-center gap-4 w-full">
        <Card>
          <Card.Title>Card Title</Card.Title>
          <Card.Body>
            Esse voluptate duis sunt nisi laboris minim exercitation
            cupidatat.Aute ullamco mollit nisi culpa adipisicing nulla
            occaecat.Ipsum ipsum pariatur magna sint excepteur dolore aliqua sit
            ipsum id velit.Aliquip fugiat aute mollit magna occaecat ex velit
            nostrud veniam.
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Title>Card Title</Card.Title>
          <Card.Body>
            Esse voluptate duis sunt nisi laboris minim exercitation
            cupidatat.Aute ullamco mollit nisi culpa adipisicing nulla
            occaecat.Ipsum ipsum pariatur magna sint excepteur dolore aliqua sit
            ipsum id velit.Aliquip fugiat aute mollit magna occaecat ex velit
            nostrud veniam.
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
