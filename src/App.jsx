import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/92c952",
    },
  ]);

  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      setMoney((prevMoney) => prevMoney - zombieFighter.price);
      setTeam((prevTeam) => [...prevTeam, zombieFighter]);
      setTotalStrength(
        (prevTotalStrength) => prevTotalStrength + zombieFighter.strength
      );
      setTotalAgility(
        (prevTotalAgility) => prevTotalAgility + zombieFighter.agility
      );
    } else {
      console.log("Not enough money");
    }
  };


  const handleRemoveFighter = (fighterToRemove) => {
    setTeam((prevTeam) => {
      const updatedTeam = prevTeam.filter(
        (fighter) => fighter.name !== fighterToRemove.name
      );
      return updatedTeam;
     
      // // 使用 reduce 来遍历并过滤掉要删除的成员
      // return prevTeam.reduce((newTeam, fighter) => {
      //   if (fighter.name !== fighterToRemove.name) {
      //     newTeam.push(fighter); // 如果不等于要删除的成员，就添加到 newTeam 中
      //   }
      //   return newTeam; // 返回累计的数组
      // }, []); // 初始值是一个空数组
    });

    // update  strength agility money
    setTotalStrength(
      (prevTotalStrength) => prevTotalStrength - fighterToRemove.strength
    );
    setTotalAgility(
      (prevTotalAgility) => prevTotalAgility - fighterToRemove.agility
    );
    setMoney((prevMoney) => prevMoney + fighterToRemove.price);
  };

  return (
    <>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}>
            <img src={zombieFighter.img} alt="" />
            <p>name: {zombieFighter.name}</p>
            <p>price: {zombieFighter.price}</p>
            <p>strength: {zombieFighter.strength}</p>
            <p>agility: {zombieFighter.agility}</p>

            {team.findIndex(item =>item.name === zombieFighter.name) === -1?<button onClick={() => handleAddFighter(zombieFighter)}>Add</button>:""}
          </li>
        ))}
      </ul>
      <h1>money: {money}</h1>
      <div>
        
        <h1>Total Strength: {totalStrength}</h1>
        <h1>Total Agility: {totalAgility}</h1>
        <h1>{team.length === 0 ? "Pick some team members!" : "My team:"}</h1>
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt="" />
              <p>Name: {fighter.name}</p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
