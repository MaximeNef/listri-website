export default function Flex(
  props = { type: "col", align: "center", justify: "center" }
) {
  return (
    <div
      className={`flex-1 flex flex-${props.type} items-${props.align} justify-${props.justify} ${props.className}`}
    >
      {props.children}
    </div>
  );
}
