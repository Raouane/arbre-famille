
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface BookingFormProps {
  onSubmit?: (data: BookingData) => void;
}

export interface BookingData {
  service: string;
  date: Date | undefined;
  time: string;
  nom: string;
  telephone: string;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

const services = [
  {
    id: "soins-caries",
    name: "Soins des caries",
    description: "Traitement des caries avec les dernières techniques mini-invasives"
  },
  {
    id: "blanchiment",
    name: "Blanchiment dentaire",
    description: "Des techniques de blanchiment sûres et efficaces"
  },
  {
    id: "detartrage",
    name: "Détartrage",
    description: "Un nettoyage professionnel pour éliminer plaque et tartre"
  },
  {
    id: "orthodontie",
    name: "Orthodontie",
    description: "Solutions discrètes pour aligner vos dents"
  },
  {
    id: "implants",
    name: "Implants dentaires",
    description: "Remplacement durable des dents manquantes"
  },
  {
    id: "pedodontie",
    name: "Pédodontie",
    description: "Soins adaptés aux enfants"
  }
];

const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: "",
    date: undefined,
    time: "",
    nom: "",
    telephone: ""
  });
  
  const handleServiceSelect = (serviceId: string) => {
    setBookingData({ ...bookingData, service: serviceId });
    setStep(2);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setBookingData({ ...bookingData, date });
  };

  const handleTimeSelect = (time: string) => {
    setBookingData({ ...bookingData, time });
    setStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(bookingData);
    }
    // Reset form or show confirmation
    setStep(4);
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className={`h-3 w-3 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`h-1 flex-1 mx-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`h-3 w-3 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`h-1 flex-1 mx-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`h-3 w-3 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Soin</span>
          <span>Date & Heure</span>
          <span>Coordonnées</span>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Sélectionnez un soin</h3>
          <RadioGroup
            value={bookingData.service}
            onValueChange={handleServiceSelect}
            className="space-y-3"
          >
            {services.map((service) => (
              <div key={service.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent/20 cursor-pointer">
                <RadioGroupItem value={service.id} id={service.id} />
                <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                  <div>
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Choisissez une date et une heure</h3>
          <div className="flex flex-col space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Date du rendez-vous</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !bookingData.date && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {bookingData.date ? (
                      format(bookingData.date, "PPP", { locale: fr })
                    ) : (
                      <span>Sélectionnez une date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={bookingData.date}
                    onSelect={handleDateSelect}
                    disabled={(date) => 
                      date < new Date() || 
                      isWeekend(date) || 
                      date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Heure du rendez-vous</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant={bookingData.time === time ? "default" : "outline"}
                    className="w-full"
                    onClick={() => handleTimeSelect(time)}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Retour
              </Button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Vos coordonnées</h3>
          
          <div>
            <label className="block text-gray-700 mb-2">Nom et Prénom *</label>
            <Input
              name="nom"
              value={bookingData.nom}
              onChange={handleInputChange}
              placeholder="Votre nom et prénom"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Téléphone *</label>
            <Input
              name="telephone"
              value={bookingData.telephone}
              onChange={handleInputChange}
              placeholder="Votre numéro de téléphone"
              type="tel"
              required
            />
          </div>
          
          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => setStep(2)}>
              Retour
            </Button>
            <Button type="submit">
              Confirmer le rendez-vous
            </Button>
          </div>
        </form>
      )}

      {step === 4 && (
        <div className="text-center py-8">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Rendez-vous confirmé</h3>
          <p className="text-gray-600 mb-4">
            Nous avons bien reçu votre demande de rendez-vous pour{" "}
            {services.find(s => s.id === bookingData.service)?.name || ""} le{" "}
            {bookingData.date ? format(bookingData.date, "PPP", { locale: fr }) : ""} à{" "}
            {bookingData.time}.
          </p>
          <p className="text-gray-600 mb-6">
            Nous vous contacterons bientôt au {bookingData.telephone} pour confirmer votre rendez-vous.
          </p>
          <Button onClick={() => setStep(1)}>Prendre un autre rendez-vous</Button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
