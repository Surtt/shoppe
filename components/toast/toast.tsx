import { Toaster } from 'react-hot-toast';
import { ToastProps } from '@/components/toast/toast.props';

const Toast = ({ position = 'bottom-center', icon }: ToastProps) => (
  <Toaster
    position={position}
    toastOptions={{
      icon: icon,
      style: {
        color: 'rgba(112, 112, 112, 1)',
        backgroundColor: 'rgba(239, 239, 239, 1)',
        maxWidth: '455px',
        padding: '17px 20px',
        boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.30)',
        borderRadius: 0,
      },
    }}
  />
);

export default Toast;
