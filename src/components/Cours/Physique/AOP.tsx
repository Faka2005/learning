import { useState } from "react";
import Images from "../../../services/Images";
import { formules } from "../../../services/data";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: {
    paths: { mathjax: "https://cdn.jsdelivr.net/npm/mathjax@3/es5" },
  },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
  },
};



// Composant pour afficher une formule associée à un nom donné
const Formules = ({ name }: { name: string }) => {
  // Chercher la formule associée au nom
  const formula = formules.find((item) => item.name === name)?.formula;

  // Afficher un message si le nom n'est pas trouvé
  if (!formula) {
    return <div style={{ textAlign: "center" }}>Formule non trouvée</div>;
  }

  // Afficher la formule avec MathJax
  return (
    <MathJaxContext config={config}>
      <div style={{ textAlign: "center", fontSize: "1.5rem", margin: "20px" }}>
        <MathJax>{formula}</MathJax>
      </div>
    </MathJaxContext>
  );
};


// Contenus en tant que composants fonctionnels
const Comparateurs = () => (
  <div>
    Les comparateurs permettent de comparer deux tensions et de produire un
    signal de sortie en fonction de la comparaison.
    <Images name="comparateur" />
  </div>
);
const Integrateur = () => (
  <div>
    Les intégrateurs permettent de calculer la moyenne d'un signal.
    <Images name="integrateur" />
    <Formules  name={"integrateur"}/>    
  </div>
);
const Suiveurs = () => (
  <div>
    Le suiveur a un gain unitaire. Il est utilisé pour isoler les étages d'un
    montage sans affecter le signal d'entrée.
    <Images name="suiveur" />
    <Formules  name={"suiveur"}/>    
  </div>
);
const AmplificateurInverseur = () => (
  <div>
    L'amplificateur inverseur produit une inversion de phase et amplifie le
    signal d'entrée selon un facteur déterminé par les résistances.
    <Images name="amplificateur_inverseur" />
    <Formules  name={"amplificateur_inverseur"}/>    
  </div>
);
const AmplificateurNonInverseur = () => (
  <div>
    L'amplificateur non inverseur amplifie le signal d'entrée sans changer sa
    phase. Il offre un gain positif.
    <Images name="amplificateur_non_inverseur" />
    <Formules  name={"amplificateur_non_inverseur"}/>    
  </div>
);
const Soustracteur = () => (
  <div>
    Le soustracteur permet de calculer la différence entre deux signaux
    d'entrée.Il y a deux modèles: 
    <Images name="soustracteur" />
    <Formules  name={"soustracteur1"}/>
    <h3>Lorsque les résitances sont différentes</h3>
    <Images name="soustracteur2" />
    <Formules  name={"soustracteur2"}/>
  </div>
);
const Sommateur = () => (
  <div>
    Le sommateur additionne plusieurs signaux d'entrée pour produire un signal
    de sortie unique.
    <Images name="sommateur" />
    <Formules  name={"sommateur"}/>    
  </div>
);
const Derivateurs = () => (
  <div>
    Le dérivateur calcule la dérivée d'un signal en fonction du temps, utile en
    traitement de signaux.
    <Images name="derivateur" />
    <Formules  name={"derivateur"}/>    
  </div>
);

// Composant principal
function AOP() {
  const [searchTerm, setSearchTerm] = useState("");

  // Liste des sujets avec leurs composants associés
  const topics = [
    { id: "Comparateurs", title: "Comparateurs", content: <Comparateurs /> },
    { id: "Suiveurs", title: "Suiveurs", content: <Suiveurs /> },
    {
      id: "Amplificateurs inverseur",
      title: "Amplificateurs inverseur",
      content: <AmplificateurInverseur />,
    },
    {
      id: "Amplificateurs non inverseur",
      title: "Amplificateurs non inverseur",
      content: <AmplificateurNonInverseur />,
    },
    { id: "Integrateur", title: "Integrateur", content: <Integrateur /> },
    { id: "Soustracteur", title: "Soustracteur", content: <Soustracteur /> },
    { id: "Sommateur", title: "Sommateur", content: <Sommateur /> },
    { id: "Dérivateurs", title: "Dérivateurs", content: <Derivateurs /> },
  ];

  // Filtrer les sujets en fonction du terme de recherche
  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amplificateurs Opérationnels</h1>
      <label htmlFor="search" style={{ marginRight: "10px" }}>
        Rechercher :
      </label>
      <input
        type="search"
        id="search"
        placeholder="Rechercher un montage..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "5px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
    
    

      <h1 style={{ marginTop: "20px" }}>Montage d'AOP en régimes linéaires</h1>
      {/* Affichage des sujets et de leurs contenus associés */}
      {filteredTopics.map((topic) => (
        <div key={topic.id} id={topic.id} style={{ marginBottom: "20px" }}>
          <h2>{topic.title}</h2>
          {topic.content}
        </div>
      ))}
    </div>
  );
}

export default AOP;
