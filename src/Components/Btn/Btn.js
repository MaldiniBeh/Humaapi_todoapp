export default function Btn(props) {
  const { classcontent, action, msg } = props;
  return (
    <div>
      <button type="button" className={classcontent} onClick={action}>
        {msg}
      </button>
    </div>
  );
}
