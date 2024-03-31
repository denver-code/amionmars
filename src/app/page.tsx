import UserList from "./components/UserList";
import newcomersData from './newcomers.json';
import databaseData from './database.json';
import InputCheck from "./components/InputCheck";

export default function Home() {
  const newcomers = newcomersData;
  const database = databaseData;

  return (
     <main className="">
         <video autoPlay muted loop className="video">         
         <source src="/bg.mp4" type="video/mp4"/>       
      </video>
      <div className="container">
        <div className="columns">
          <UserList usernames={newcomers} />
        </div>
        <div className="columns max-w-4xl">
          <InputCheck newcomers={newcomers} database={database} />
          
        </div>
      </div>
    </main>
  );
}
