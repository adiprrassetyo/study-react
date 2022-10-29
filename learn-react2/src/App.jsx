import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

import clsx from "clsx";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      {/* flex */}
      <div className="max-w-md w-full">
        <Button>
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  );
}
