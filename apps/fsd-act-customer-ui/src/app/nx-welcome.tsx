export function NxWelcome({ title }: { title: string }) {
  const onButtonClick = () => {
    fetch('/fact').then((res) => res.json()).then((data) => console.log(data));
  }
  return (
    <>
      <h1>Welcome to {title}!</h1>
      <button onClick={onButtonClick}>
        Test API
      </button>
    </>
  );
}

export default NxWelcome;
