import Link from 'next/link';
import NavBar from './NavBar';

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold">fleury.lol</h1>
      {/* <NavBar /> */}
      <Link href="/projects">My Projects</Link>
    </main>
  );
}
