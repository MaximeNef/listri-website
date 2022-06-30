export default function Container(props) {
  const classes = "w-full w-xl w-lg w-md w-sm w-xs";

  function findWidthClass() {
    switch (props.type) {
      case "full":
        return "full";
      case "3xl":
        return "[375px]";
      case "2xl":
        return "56";
      case "xl":
        return "48";
      case "lg":
        return "40";
      case "md":
        return "32";
      case "sm":
        return "24";
      case "xs":
        return "16";
    }
  }

  return (
    <>
      <div
        onClick={props.onClick}
        id={props.id}
        className={`flex flex-col w-${findWidthClass()} ${props.className}`}
        style={{
          ...(props.fitHeight && { height: "fit-content" }),
          ...props.style,
        }}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        {props.children}
      </div>
      <div className='justify-between flex-row flex-row-reverse w-8 w-16 w-24 w-32 w-40 w-48 w-56 w-[375px] w-full ml-28 mr-28 bg-danger  hidden bg-secondary' />
    </>
  );
}
