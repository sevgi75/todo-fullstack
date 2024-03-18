import { useEffect, useState } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
    try {
      // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
      const res = await axios.get(process.env.REACT_APP_URL)
      setTutorials(res.data.body)
    } catch (error) {
      console.log(error)
    }
  }

  //? Mount asamasinda istek atilmali
  useEffect(() => {
    getTutorials()
  }, [])

  console.log(tutorials)
  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  )
}

export default Home
