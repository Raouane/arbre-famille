
import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <Card className="service-card">
    <CardContent className="p-6">
      <Icon className="h-10 w-10 text-primary mb-3" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

// Testimonial Card Component
const TestimonialCard = ({ name, text }: { name: string; text: string }) => (
  <Card className="testimonial-card">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-pastel-lavender mr-3"></div>
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 italic">"{text}"</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [activeSection, setActiveSection] = useState("accueil");

  return (
    <div className="min-h-screen">
      {/* En-tête / Navigation */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-30">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-primary">Dr. Sophie Martin</h1>
          <nav className="hidden md:flex space-x-6">
            <button className="nav-link hover:text-primary">Accueil</button>
            <button className="nav-link hover:text-primary">À Propos</button>
            <button className="nav-link hover:text-primary">Nos Soins</button>
            <button className="nav-link hover:text-primary">Témoignages</button>
            <button className="nav-link hover:text-primary">Contact</button>
          </nav>
          <Button className="md:hidden">Menu</Button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Un sourire en pleine santé</h1>
            <p className="text-lg text-gray-600 mb-8">
              Des soins dentaires de qualité pour toute la famille dans un environnement confortable et accueillant
            </p>
            <Button size="lg" className="px-8 py-6">
              <Calendar className="mr-2" />
              Prendre rendez-vous
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-pastel-mint"></div>
          </div>
        </div>
      </section>
      
      {/* À propos section */}
      <section className="bg-pastel-lavender/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">À Propos</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square bg-pastel-mint"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Sophie Martin</h3>
              <p className="text-gray-600 mb-4">
                Diplômée de la faculté de chirurgie dentaire de Paris, j'exerce depuis plus de 15 ans 
                avec une approche centrée sur le patient et son confort.
              </p>
              <p className="text-gray-600 mb-4">
                Ma philosophie est de proposer des soins de haute qualité dans une ambiance 
                détendue et rassurante, en expliquant chaque étape du traitement.
              </p>
              <p className="text-gray-600">
                Je me forme régulièrement aux dernières techniques pour vous offrir 
                les soins les plus avancés et les moins invasifs possibles.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Soins Dentaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Clock}
              title="Soins des caries" 
              description="Traitement des caries avec les dernières techniques mini-invasives pour préserver au maximum vos dents."
            />
            <ServiceCard 
              icon={Clock}
              title="Blanchiment dentaire" 
              description="Des techniques de blanchiment sûres et efficaces pour un sourire éclatant."
            />
            <ServiceCard 
              icon={Clock}
              title="Détartrage" 
              description="Un nettoyage professionnel pour éliminer plaque et tartre, et prévenir les problèmes gingivaux."
            />
            <ServiceCard 
              icon={Clock}
              title="Orthodontie" 
              description="Solutions discrètes pour aligner vos dents, incluant des gouttières transparentes."
            />
            <ServiceCard 
              icon={Clock}
              title="Implants dentaires" 
              description="Remplacement durable des dents manquantes avec des implants de haute qualité."
            />
            <ServiceCard 
              icon={Clock}
              title="Pédodontie" 
              description="Soins adaptés aux enfants dans un environnement rassurant et ludique."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="bg-pastel-lavender/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Marie L." 
              text="J'avais une peur bleue des dentistes avant de rencontrer Dr. Martin. Sa patience et sa douceur m'ont permis de retrouver confiance et d'avoir un sourire dont je suis fière."
            />
            <TestimonialCard 
              name="Thomas D." 
              text="Excellent suivi pour mon appareil dentaire invisible. Le Dr. Martin a su répondre à toutes mes questions et les résultats sont impressionnants."
            />
            <TestimonialCard 
              name="Julie B." 
              text="Mes enfants ne sont plus angoissés d'aller chez le dentiste. L'équipe est formidable et le cabinet accueillant. Je recommande vivement!"
            />
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Formulaire de contact</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4} 
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Envoyer</Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Adresse</h4>
                    <p className="text-gray-600">12 rue du Sourire<br/>75008 Paris</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Téléphone</h4>
                    <p className="text-gray-600">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">contact@drsophiemartin.fr</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Horaires</h4>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h - 18h<br/>
                      Samedi: 9h - 13h<br/>
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-pastel-mint flex items-center justify-center">
                  <p className="text-gray-600">Carte Google Maps ici</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-primary/5 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-primary">Dr. Sophie Martin</h3>
              <p className="text-sm text-gray-600">Cabinet dentaire</p>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 Cabinet Dentaire Dr. Sophie Martin. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
      
      {/* Bouton WhatsApp flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="rounded-full h-14 w-14 flex items-center justify-center bg-green-500 hover:bg-green-600">
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
