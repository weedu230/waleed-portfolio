import { CheckCircle } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const SuccessModal = ({ isOpen, onClose, title, message }: SuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-muted-foreground mb-6">{message}</p>
          <Button onClick={onClose} className="bg-brand-sky hover:bg-brand-sky/90 text-white">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;