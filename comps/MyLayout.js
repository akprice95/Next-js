import Header from "./Header";

const LayoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export default function Laytout(props) {
  return (
    <div style={LayoutStyle}>
      <Header />
      {props.children}
    </div>
  );
}
