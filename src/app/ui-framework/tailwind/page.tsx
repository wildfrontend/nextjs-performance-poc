import MainLayout from '@/components/ui-framework/tailwindcss/layouts/main';
import componentSamples from '@/components/ui-framework/tailwindcss/ui/collections';
import '@/styles/tailwind.css';

const Page: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8 w-full">
        <h1 className='font-extrabold text-2xl sm:text-4xl'>Tailwindcss Components</h1>
        {componentSamples.map(({ id, title, component, docs }) => (
          <div className="flex flex-col gap-4" id={id} key={id}>
            <div className="flex flex-row items-center justify-between">
              <h2 className='font-bold text-xl sm:text-2xl'>{title}</h2>
              <a
                className="btn btn-secondary"
                color="secondary"
                href={docs}
                rel="noreferrer"
                target="_blank"
              >
                Docs
              </a>
            </div>
            <div>{component}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Page;
