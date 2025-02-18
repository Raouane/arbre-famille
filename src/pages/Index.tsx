
import { useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Home, Users, BookOpen } from "lucide-react";

const FamilyButton = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <button className="family-button">
    <Icon className="h-6 w-6" />
    <span>{label}</span>
  </button>
);

const FamilyMemberCard = ({ name, relation }: { name: string; relation: string }) => (
  <div className="family-member-card">
    <div className="h-20 w-20 mx-auto mb-2 rounded-full bg-pastel-lavender animate-bounce-soft" />
    <h3 className="text-lg font-bold text-center">{name}</h3>
    <p className="text-sm text-center text-gray-600">{relation}</p>
  </div>
);

const Index = () => {
  const [activeSection, setActiveSection] = useState("accueil");

  return (
    <div className="min-h-screen p-8">
      <CustomCursor />
      
      {/* En-tête */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 animate-float">Mon Arbre Généalogique</h1>
        <p className="text-lg text-gray-600">Explore et découvre ta famille !</p>
      </header>

      {/* Navigation Principale */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FamilyButton icon={Home} label="Rencontrer Ma Famille" />
        <FamilyButton icon={Users} label="Découvrir Mes Oncles" />
        <FamilyButton icon={BookOpen} label="Histoires de Famille" />
      </div>

      {/* Grille des Membres de la Famille */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <FamilyMemberCard name="Maman" relation="Mère" />
        <FamilyMemberCard name="Papa" relation="Père" />
        <FamilyMemberCard name="Sarah" relation="Sœur" />
        <FamilyMemberCard name="Tom" relation="Frère" />
      </div>
    </div>
  );
};

export default Index;
