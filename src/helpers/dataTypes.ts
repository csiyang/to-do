export interface IForm {
  id: number,
  taskName: string,
  taskDetails: string,
  taskCompleted: boolean
}

type ITestData = IForm[]

export const testData: ITestData = [
  {
    id: 1,
    taskName: 'Brush teeth',
    taskDetails: 'Stop slacking',
    taskCompleted: false
  },
  {
    id: 2,
    taskName: 'Eat some food',
    taskDetails: 'Make sure it\'s a balanced meal!',
    taskCompleted: false
  },
  {
    id: 3,
    taskName: 'Code',
    taskDetails: 'Be curious',
    taskCompleted: false
  }
]
