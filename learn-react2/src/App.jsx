import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

import clsx from "clsx";

export default function App() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      {/* flex */}
      <div className="flex gap-x-2">
        {/* <Button text="register" /> */}
        <Button
          {...{
            type: "submit",
            onClick: () => console.log("Login with another style...."),
          }}
        >
          <IconBrandFacebook />
          Login
        </Button>
        <Button
          className="bg-sky-600"
          onClick={() => console.log("login")}
          type="button"
        >
          <IconBrandTwitter />
          Login
        </Button>

        <Button
          className="bg-black"
          onClick={() => console.log("login")}
          type="button"
        >
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  );
}

// function button
function Button(props) {
  const { className = "bg-blue-600", text, children, type = "submit" } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 hover:bg-late-700 text-white font-bold py-2 px-4 rounded"
      )}
    >
      {text || children}
    </button>
  );
}
