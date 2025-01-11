import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses, Course } from '../../services/data';
import AOP from '../Cours/Physique/AOP';
import CoursNbComplexe from '../Cours/Maths/Nb_Complexe';
import Filtre from '../Cours/Physique/Filtres';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    // Trouver le cours correspondant à l'ID passé dans les paramètres
    const selectedCourse = courses.find(course => course.id === Number(id));
    setCourse(selectedCourse || null);
  }, [id]);

  if (!course) {
    return <p>Chargement...</p>;
  }

  // Fonction de rendu en fonction de l'ID du cours
  const renderCourse = (courseId: number) => {
    switch (courseId) {
      // Ajouter ici les composants correspondants
      // case 1:
      //   return <React />;
      // case 2:
      //   return <Typescript />;
      // case 3:
      //   return <Node />;
      case 4:
        return <CoursNbComplexe />;
      case 5:
        return <AOP />;
      // case 6:
      //   return <Transistors />;
      // case 7:
      //   return <Diode />;
      case 8:
        return <Filtre />;
      default:
        return <div>Course not found</div>;
    }
  };

  return (
    <div>
      {/* Afficher les informations du cours */}
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      {/* Rendu du composant spécifique */}
      {renderCourse(course.id)}
    </div>
  );
};

export default CourseDetail;
