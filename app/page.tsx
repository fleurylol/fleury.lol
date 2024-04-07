import Link from 'next/link';
import NavBar from './NavBar';

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold">fleury.lol</h1>
      {/* <NavBar /> */}
      <p>Hi, my name is Zach</p>
      <p className="pb-2">I like to make things on the web</p>
      <Link href="/projects">My Projects</Link>
    </main>
  );
}
