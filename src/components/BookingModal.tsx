
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import BookingForm, { BookingData } from "./BookingForm";

interface BookingModalProps {
  children?: React.ReactNode;
}

const BookingModal = ({ children }: BookingModalProps) => {
  const handleBookingSubmit = (data: BookingData) => {
    console.log("Booking submitted:", data);
    // Here you would typically send this data to your backend
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <Button size="lg" className="px-8 py-6">
            <Calendar className="mr-2" />
            Prendre rendez-vous
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <BookingForm onSubmit={handleBookingSubmit} />
      </SheetContent>
    </Sheet>
  );
};

export default BookingModal;
