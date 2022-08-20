function TextComponent(props) {
    return (
    <p className={'font '+props.cn} style={{fontSize: props.fs}}> {props.text}</p>
  );
}

export default TextComponent;