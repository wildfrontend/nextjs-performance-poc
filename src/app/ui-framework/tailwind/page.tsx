import MainLayout from '@/components/ui-framework/tailwindcss/layouts/main';
import '@/styles/tailwind.css';

const Page: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </MainLayout>
  );
};

export default Page;
