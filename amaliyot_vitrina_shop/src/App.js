//1-o'quvchilar varianti
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Shop from "./components/Shop";
// import { useState } from "react";
// function App() {
//   const[language, SetLanguage] = useState('en')
//   const [loading, setLoading] = useState(true)
//     const data = [
//         {language: 'en', id: 1, languageName: "English"},
//         {language: 'ru', id: 2, languageName: 'Russian'},
//         {language: 'ar', id: 3, languageName: 'Arabic'},
//         {language: 'de', id: 4, languageName: 'German'},
//         {language: 'tr', id: 5, languageName: 'Turkish'},
//         {language: 'ko', id: 6, languageName: 'Korean'},
//         {language: 'ja', id: 7, languageName: 'Japanese'},

//     ]
//   return (
//     <div>
//       <Header 
//         data={data} 
//         setLan={SetLanguage} 
//         setLoading={setLoading}
//         />
//       <Shop 
//         lan={language} 
//         loading={loading} 
//         setLoading={setLoading}
//         />
//       <Footer/>
//     </div>
//   );
// }

// export default App;
//---------------------------------------------------------------------
//Profesional variant
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { useState } from "react";
import { ContextPorvider } from "./context";
function App() {
  const[language, SetLanguage] = useState('en')
  const [loading, setLoading] = useState(true)
    const data = [
        {language: 'en', id: 1, languageName: "English"},
        {language: 'ru', id: 2, languageName: 'Russian'},
        {language: 'ar', id: 3, languageName: 'Arabic'},
        {language: 'de', id: 4, languageName: 'German'},
        {language: 'tr', id: 5, languageName: 'Turkish'},
        {language: 'ko', id: 6, languageName: 'Korean'},
        {language: 'ja', id: 7, languageName: 'Japanese'},

    ]
  return (
    <div>
      <Header 
        data={data} 
        setLan={SetLanguage} 
        setLoading={setLoading}
        />
        <ContextPorvider>
        <Shop 
          lan={language} 
          loading={loading} 
          setLoading={setLoading}
        />
        </ContextPorvider>
      <Footer/>
    </div>
  );
}

export default App;
