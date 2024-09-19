import React from 'react'
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

const Heading = () => {
  return (
    <div className='text-center max-w-3xl space-y-4 mt-20 h-[89vh] flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Your ideas, Documents, and Plans. Welcome to
          <span className="underline ml-1 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Notion
          </span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Notion is a note-taking app that allows you to create, organize,
          <br /> and share your ideas, documents, and plans.
        </h3>
        <Button>Get Started <ArrowRightIcon/></Button>
    </div>
  );
}

export default Heading