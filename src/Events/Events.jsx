export default function AlertClock() {
  function handleButtonClick() {
    const nowDate = new Date();
    alert(`Adesso sono le ${nowDate.toLocaleTimeString()}`);
  }

  return (
    <div>
      <p>Clicca il bottone per vedere l'ora attuale!</p>
      <button onClick={handleButtonClick}>Cliccami!</button>;
    </div>
  );
}
