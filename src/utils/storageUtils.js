const STORAGE_KEY = 'my-momentum';

const getData = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}
export const getName = () => {
  return getData().name;
}

export const setName = (name) => {
  console.log(name)
  const data = getData();
	
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.assign(data, { name })));
}

export const getGoal = () => {
  const data = getData();
  if (data.goal && data.goal.date === new Date().toDateString()) {
    return data.goal.value;
  }
}

export const setGoal = (goalValue) => {
  const data = getData();
  const goal = {
    date: new Date().toDateString(),
    value: goalValue,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.assign(data, { goal })));
}