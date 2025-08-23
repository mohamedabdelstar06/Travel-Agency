import { Header } from "Components/"
const Dashboard = () => {
  const user ={name :'Mohamed Abdelstar'};
  return (
    <div className="dashboard wrapper">
      <Header 
      title={`Welcome ${user?.name ?? 'Guest'} 👋`}
      description ="Track activity , trends and popular destination in real time"
      />
      Dashboard Page Contents
    </div>
  )
}

export default Dashboard

