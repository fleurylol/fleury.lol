import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectTile = () => {
  return (
    <div className="border-2 rounded-md p-2 flex">
      <Image
        src="https://i.ibb.co/hHfkqLL/danhipp.webp"
        alt="Dan Hipp"
        width={250}
        height={250}
      />
      <div className="p-2">
        <h1 className="text-xl font-bold">Dan Hipp Collection Tracker</h1>
        <h1 className="text-l font-bold">4/4/24</h1>
        <p>
          This is a tool to keep track of all of your own variants by the lovely
          artist Dan Hipp in the game Marvel Snap
        </p>
        <Link href="/projects/dan-hipp-collection-tracker">Read More</Link>
      </div>
    </div>
  );
};

export default ProjectTile;
