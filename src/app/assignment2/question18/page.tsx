import UserPreferences from "@/app/components/UserPreferences";

export default function Question18() {
  return (
    <>
      <h3>
        18. Design a custom hook named useLocalStorage to interact with local
        storage. Create a useLocalStorage hook that allows storing and
        retrieving data from local storage. Implement methods for setting,
        getting, and removing data using the hook. Utilize the localStorage API
        within the hook to manage data. Develop a component that uses the
        useLocalStorage hook to manage user preferences.
      </h3>
      <UserPreferences />
    </>
  );
}
