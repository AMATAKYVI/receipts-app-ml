import MainBoard from '@/components/homeboard/MainBoard';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <main className="block sm:flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <MainBoard />
      </div>
      {/* <Login /> */}
    </main>
  );
}
