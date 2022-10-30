import clsx from "clsx";

// function button
export default function Button(props) {
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
