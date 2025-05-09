import { Scene } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <main className="overflow-hidden h-full w-full">
        <Scene />
      </main>
      <footer className="w-full flex items-center justify-center border-t border-white py-4 text-gray-400">
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://github.com/cpl121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden sm:inline">cpl121.eth</span>
        </a>
      </footer>
    </div>
  );
}
