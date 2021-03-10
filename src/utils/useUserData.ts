import { ref } from "vue";
import { getGoal, getName, setName as setNameToStorage, setGoal as setGoalToStorage } from './storageUtils'

export default function useUserData() {
  const name = ref(getName());
  const goal = ref(getGoal());

  const setName = (newName: string) => {
    setNameToStorage(newName);
    name.value = newName;
  }

  const setGoal = (newGoal: string) => {
    setGoalToStorage(newGoal);
    goal.value = newGoal
  }

  return {
    name,
    goal,
    setName,
    setGoal
  }
}