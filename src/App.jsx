import { useContext, useEffect, useState, useSyncExternalStore } from 'react'
import './App.css'
import Login from './Auth/login'
import { EmployeeDashboard } from './Dashboard/EmployeeDashboard'
import { Admin } from './Dashboard/Admin'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'
import AuthProvider from './Context/AuthProvider'


const App = () => {
const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)

  // isse localStorage update hua hai 
  // useEffect(() => {
  //   setLocalStorage();
  //   console.log(getLocalStorage());
  // }, []);
//agar localstorage se authdata aachuka hai tow usko hum loggedInUser mei dalleneg jisse pata rahe kon kon login in kiya ya baad ke logic mei use karsakte hai 
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("LoggedInUser")
  //     // setuser jo null hai usse ye data usmei chala jaega take role ka pata chaljae jab aap employee ho toe employeedashboard hi khulega ya admin ho toe admin wala ye functionaliy kholne ke lie hum isko use karte hai 
  //     if(loggedInUser){setUser.role}
  //   }}, [authData])

  //isse login krke login rahega
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggegInUser');
    if (loggedInUser) {
    //ye data string mei comvert kiya hai 
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
},[]);




  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if (email === 'admin@company.com' && password === '123') {
      setUser('admin');
    localStorage.setItem("loggegInUser",JSON.stringify({role:'admin'}))
      return;
    }

    // EMPLOYEE LOGIN
    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
        localStorage.setItem("loggegInUser",JSON.stringify({role:'employee',data:employee}))
    } else {
      alert("Invalid Entry");
    }
  };


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {/* {user == 'admin' ? <Admin /> : {user == 'employee' ? <EmployeeDashboard data={loggedInUserData} />: null }} */}
      {user === 'admin' && <Admin changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>}
    </>
  )
}

export default App
