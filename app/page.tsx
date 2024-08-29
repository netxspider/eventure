"use client"
import Accomodations from "@/components/Accomodations";
import ChatBubble from "@/components/ChatBubble";
import Card from "@/components/EventCard";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Places from "@/components/Places";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Home() {
  interface CardProps {
    image: string;
    title: string;
    description: string;
    buttonText: string;
  }
  

  // Dummy data for testing
const dummyData: CardProps[] = [
  {
    image: 'https://i.ytimg.com/vi/5U_bIk88IDM/maxresdefault.jpg',
    title: 'Fresher\'s Party',
    description: 'This is the first card.',
    buttonText: 'Buy Tickets',
  },
  {
    image: 'https://www.edmtunes.com/wp-content/uploads/2022/07/bk-mirage-1024x684.jpg',
    title: 'Card 2',
    description: 'This is the second card.',
    buttonText: 'Learn More',
  },
  {
    image: 'https://www.edmtunes.com/wp-content/uploads/2022/07/bk-mirage-1024x684.jpg',
    title: 'Card 3',
    description: 'This is the third card.',
    buttonText: 'Sign Up',
  },
];
  return (
    <main className="bg-black w-full h-full">
       <Navbar/>
       <div className="flex mt-5">
       <Main/></div>

       <div className="flex my-5 gap-5">
            <div className="border-2 border-white rounded-2xl p-5 basis-1/4">
              <h2 className="text-2xl text-white">Accomodations</h2>
              <Accomodations/>
            </div>
            <div className="border-2 border-white rounded-2xl p-5 basis-2/4">
              <h2 className="text-2xl text-white">Events Happening</h2>
            <Card/>
              
            </div>
            <div  className="border-2 border-white rounded-2xl p-5 basis-1/4">
              <h2 className="text-2xl text-white">Event Updates</h2>
              <div>
                  <ChatBubble/>
              </div>
            </div>
       </div>
       <div>
       <div className="border-2 border-white rounded-2xl p-5 basis-1/4">
              <h2 className="text-2xl text-white">Tourist Places</h2>
              <div>
                <Places/>
              </div>
            </div>
       </div>
       <Footer/>
       <div>
       
       </div>

       
    </main>
  );
}
