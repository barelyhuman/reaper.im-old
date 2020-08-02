const Icon = (props) => {
  return (
    <>
      <span className="icon-container">{props.children}</span>
      <style jsx>
        {`
          .icon-container {
            height: 32px;
            width: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Icon;
