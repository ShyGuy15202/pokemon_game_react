import React, { useState,useEffect } from 'react'
import { db } from '../backend(firebase)/firebase';
import { doc, setDoc, collection, query, orderBy, limit, onSnapshot, getDoc } from "firebase/firestore";

const Leaderboard = () => {
const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  //  Submit score
  const addScore = async () => {
    if (!username || !score) return;

  else {  
    try {await setDoc(doc(db, "leaderboard", username),
        { score: Number(score) }, { merge: true });
        setScore("");
        } 
    catch (error) {
      console.error("Error adding score:", error);
    }}
  };

  // Live leaderboard (auto-updates when scores change)
  useEffect(() => {
    const q = query(
      collection(db, "leaderboard"),
      orderBy("score","desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const scores = snapshot.docs.map(doc => ({ username: doc.id, ...doc.data() }));
      console.log(q)
      setLeaderboard(scores);
    });

    return () => unsubscribe(); // cleanup
  }, []);
  return (
 <div className='text-white'>
      <h2>Leaderboard</h2>

      {/* Input fields */}
      <input className='text-black'
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className='text-black'
        placeholder="Score"
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={addScore}>Submit Score</button>

      {/* Display leaderboard */}
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={entry.username}>
            {index + 1}. {entry.username} — {entry.score}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Leaderboard