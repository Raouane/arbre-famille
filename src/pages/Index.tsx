
import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, imageSrc }: { icon: any; title: string; description: string; imageSrc?: string }) => (
  <Card className="service-card">
    <div className="aspect-video overflow-hidden rounded-t-xl">
      <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
    </div>
    <CardContent className="p-6">
      <Icon className="h-10 w-10 text-primary mb-3" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

// Testimonial Card Component
const TestimonialCard = ({ name, text, imageSrc }: { name: string; text: string; imageSrc?: string }) => (
  <Card className="testimonial-card">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-pastel-lavender mr-3 overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-pastel-lavender"></div>
          )}
        </div>
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 italic">"{text}"</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [activeSection, setActiveSection] = useState("accueil");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen">
      {/* En-tête / Navigation */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-30">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-primary">Dr. Sophie Martin</h1>
          <nav className="hidden md:flex space-x-6">
            <button 
              className={`nav-link hover:text-primary ${activeSection === 'accueil' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('accueil')}
            >
              Accueil
            </button>
            <button 
              className={`nav-link hover:text-primary ${activeSection === 'a-propos' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('a-propos')}
            >
              À Propos
            </button>
            <button 
              className={`nav-link hover:text-primary ${activeSection === 'nos-soins' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('nos-soins')}
            >
              Nos Soins
            </button>
            <button 
              className={`nav-link hover:text-primary ${activeSection === 'temoignages' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('temoignages')}
            >
              Témoignages
            </button>
            <button 
              className={`nav-link hover:text-primary ${activeSection === 'contact' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>
          <Button 
            className="md:hidden"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            Menu
          </Button>
        </div>
        <div id="mobile-menu" className="container mx-auto px-4 py-2 hidden md:hidden">
          <div className="flex flex-col space-y-2">
            <button 
              className={`nav-link hover:text-primary py-2 ${activeSection === 'accueil' ? 'text-primary' : ''}`}
              onClick={() => {
                scrollToSection('accueil');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
            >
              Accueil
            </button>
            <button 
              className={`nav-link hover:text-primary py-2 ${activeSection === 'a-propos' ? 'text-primary' : ''}`}
              onClick={() => {
                scrollToSection('a-propos');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
            >
              À Propos
            </button>
            <button 
              className={`nav-link hover:text-primary py-2 ${activeSection === 'nos-soins' ? 'text-primary' : ''}`}
              onClick={() => {
                scrollToSection('nos-soins');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
            >
              Nos Soins
            </button>
            <button 
              className={`nav-link hover:text-primary py-2 ${activeSection === 'temoignages' ? 'text-primary' : ''}`}
              onClick={() => {
                scrollToSection('temoignages');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
            >
              Témoignages
            </button>
            <button 
              className={`nav-link hover:text-primary py-2 ${activeSection === 'contact' ? 'text-primary' : ''}`}
              onClick={() => {
                scrollToSection('contact');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section id="accueil" className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Un sourire en pleine santé</h1>
            <p className="text-lg text-gray-600 mb-8">
              Des soins dentaires de qualité pour toute la famille dans un environnement confortable et accueillant
            </p>
            <Button 
              size="lg" 
              className="px-8 py-6"
              onClick={() => scrollToSection('contact')}
            >
              <Calendar className="mr-2" />
              Prendre rendez-vous
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
              alt="Cabinet dentaire moderne" 
              className="w-full h-full object-cover aspect-video" 
            />
          </div>
        </div>
      </section>
      
      {/* À propos section */}
      <section id="a-propos" className="bg-pastel-lavender/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">À Propos</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=2080&auto=format&fit=crop" 
                alt="Dr. Sophie Martin" 
                className="w-full h-full object-cover aspect-square" 
              />
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
      <section id="nos-soins" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Soins Dentaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Clock}
              title="Soins des caries" 
              description="Traitement des caries avec les dernières techniques mini-invasives pour préserver au maximum vos dents."
              imageSrc="https://images.unsplash.com/photo-1606811961251-41f1a3f0e3c9?q=80&w=2074&auto=format&fit=crop"
            />
            <ServiceCard 
              icon={Clock}
              title="Blanchiment dentaire" 
              description="Des techniques de blanchiment sûres et efficaces pour un sourire éclatant."
              imageSrc="https://images.unsplash.com/photo-1571748152799-98929d0cbf95?q=80&w=2070&auto=format&fit=crop"
            />
            <ServiceCard 
              icon={Clock}
              title="Détartrage" 
              description="Un nettoyage professionnel pour éliminer plaque et tartre, et prévenir les problèmes gingivaux."
              imageSrc="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1974&auto=format&fit=crop"
            />
            <ServiceCard 
              icon={Clock}
              title="Orthodontie" 
              description="Solutions discrètes pour aligner vos dents, incluant des gouttières transparentes."
              imageSrc="https://images.unsplash.com/photo-1595003298804-0d1bb0400fce?q=80&w=2080&auto=format&fit=crop"
            />
            <ServiceCard 
              icon={Clock}
              title="Implants dentaires" 
              description="Remplacement durable des dents manquantes avec des implants de haute qualité."
              imageSrc="https://images.unsplash.com/photo-1579390169855-a027ca1370cc?q=80&w=2070&auto=format&fit=crop"
            />
            <ServiceCard 
              icon={Clock}
              title="Pédodontie" 
              description="Soins adaptés aux enfants dans un environnement rassurant et ludique."
              imageSrc="https://images.unsplash.com/photo-1588776814827-85c3e64d2a0b?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section id="temoignages" className="bg-pastel-lavender/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Marie L." 
              text="J'avais une peur bleue des dentistes avant de rencontrer Dr. Martin. Sa patience et sa douceur m'ont permis de retrouver confiance et d'avoir un sourire dont je suis fière."
              imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
            />
            <TestimonialCard 
              name="Thomas D." 
              text="Excellent suivi pour mon appareil dentaire invisible. Le Dr. Martin a su répondre à toutes mes questions et les résultats sont impressionnants."
              imageSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
            />
            <TestimonialCard 
              name="Julie B." 
              text="Mes enfants ne sont plus angoissés d'aller chez le dentiste. L'équipe est formidable et le cabinet accueillant. Je recommande vivement!"
              imageSrc="https://images.unsplash.com/photo-1619538189873-3cc0ad364b7d?q=80&w=1974&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="contact" className="py-16">
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
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Paris,France&zoom=14&size=600x300&maptype=roadmap&markers=color:blue%7CParis,France&key=YOUR_API_KEY" 
                  alt="Localisation du cabinet" 
                  className="w-full"
                />
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
      <a href="https://wa.me/33123456789" className="fixed bottom-6 right-6 z-50" target="_blank" rel="noopener noreferrer">
        <Button className="rounded-full h-14 w-14 flex items-center justify-center bg-green-500 hover:bg-green-600">
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default Index;
