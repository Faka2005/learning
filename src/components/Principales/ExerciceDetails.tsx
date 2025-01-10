import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Quiz_Nb_Complexe,Exercise,exercices } from "../../services/data";
import Quiz from "../Exercice/Quiz";
const ExerciceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [exercice, setExercice] = useState<Exercise | null>(null);

  useEffect(() => {
    const selectedExercice = exercices.find(ex => ex.id === Number(id));
    setExercice(selectedExercice || null);
  }, [id]);

  if (!exercice) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>{exercice.title}</h2>
      <p>{exercice.description}</p>
      {/* Composant spécifique basé sur l'ID */}
      {exercice.id === 1 && <Quiz  exercielist={Quiz_Nb_Complexe} />}
    </div>
  );
};

export default ExerciceDetails;