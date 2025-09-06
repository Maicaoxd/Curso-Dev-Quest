import useOnlineStatus from "../../hooks/useOnlineStatus";

export default function SaveButton() {
  function handleClick() {
    console.log("Saving");
  }

  const isOnline = useOnlineStatus();

  return (
    <button disabled={!isOnline} onClick={handleClick}>
      {isOnline ? "Save" : "Offline"}
    </button>
  );
}
