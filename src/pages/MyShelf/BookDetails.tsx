import React from 'react';
import { useParams } from 'react-router-dom';
import UserLayout from '../user/UserLayout';
import { ArrowLeft, BookOpen, Headphones } from 'lucide-react';
import { MdOutlineRateReview } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { LuShare2 } from "react-icons/lu";

interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    rating: number;
    coverUrl: string;
    currentlyReading: number;
    haveRead: number;
    edition: string;
    publishedIn: string;
    publisher: string;
    language: string;
    pages: number;
    type: 'Borrowed' | 'E-BOOK';
    callNumber?: string;
}

const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const book = {
        id: '1',
        title: "Don't Make Me Think",
        author: 'Steve Krug',
        year: 2000,
        rating: 5.0,
        coverUrl: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042740/Rectangle_12_4_valwav.png',
        currentlyReading: 25,
        haveRead: 119,
        edition: 'Second Edition',
        publishedIn: 'United States',
        publisher: 'New Riders Press',
        language: 'English',
        pages: 216,
        type: 'Borrowed',
        callNumber: 'CS A-15'
    };

    return (
        <UserLayout>
            <div className="max-w-6xl mx-auto p-4 bg-gray-50">
                {/* Back Button */}
                <a href="#" className="flex items-center gap-2 text-gray-600 mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to results
                </a>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Book Cover */}
                        <div className="bg-white p-4 shadow-sm">
                            <img 
                                src={book.coverUrl} 
                                alt={book.title}
                                className="w-full"
                            />
                        </div>

                        {/* Action Icons */}
                        <div className="flex justify-between">
                            <button className="flex items-center gap-2 p-2">
                                <MdOutlineRateReview size={20} />
                                <span className="text-sm">Review</span>
                            </button>
                            <button className="flex items-center gap-2 p-2">
                                <TfiWrite size={20} />
                                <span className="text-sm">Notes</span>
                            </button>
                            <button className="flex items-center gap-2 p-2">
                                <LuShare2 size={20} />
                                <span className="text-sm">Share</span>
                            </button>
                        </div>

                        {/* Buy Options */}
                        <div className="border-t pt-4">
                            <h3 className="text-sm text-orange-500 mb-2">Buy this book Online</h3>
                            <div className="space-y-2">
                                <button className="w-full bg-yellow-400 text-black py-2 px-4 rounded flex items-center justify-between">
                                    Buy Now
                                    <img src="/api/placeholder/20/20" alt="Amazon" className="w-5 h-5" />
                                </button>
                                <button className="w-full bg-black text-white py-2 px-4 rounded flex items-center justify-between">
                                    Buy Now
                                    <img src="/api/placeholder/20/20" alt="Kindle" className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">*small commission</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                        <div className="space-y-6">
                            {/* Title Section */}
                            <div>
                                <h1 className="text-2xl font-medium">{book.title}</h1>
                                <p className="text-gray-600">By {book.author}, {book.year}</p>
                                <p className="text-sm text-gray-500">{book.edition}</p>
                            </div>

                            {/* Ratings */}
                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {'★★★★★'.split('').map((star, i) => (
                                            <span key={i}>{star}</span>
                                        ))}
                                    </div>
                                    <span>{book.rating} Ratings</span>
                                </div>
                                <span>{book.currentlyReading} Currently reading</span>
                                <span>{book.haveRead} Have read</span>
                            </div>

                            {/* Availability Section */}
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>Availability</span>
                                    <span>Status</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            <span>Hard Copy</span>
                                        </div>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                            In-Shelf
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        <span>E-Book</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            <span>Audio book</span>
                                        </div>
                                        <span className="text-sm text-gray-500">{book.callNumber}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button className="bg-orange-500 text-white px-8 py-2 rounded font-medium">
                                    BORROW
                                </button>
                                <button className="bg-green-500 text-white px-8 py-2 rounded font-medium flex items-center gap-2">
                                    Read Now
                                    <Headphones className="w-4 h-4" />
                                </button>
                                <button className="border border-gray-300 px-4 py-2 rounded">
                                    Add to List ▾
                                </button>
                            </div>

                            {/* Navigation Tabs */}
                            <div className="border-b">
                                <div className="flex gap-8">
                                    {[
                                        'Overview',
                                        'View 166 Editions',
                                        'Details',
                                        '4.1k Reviews',
                                        'Lists',
                                        'Related Books'
                                    ].map((tab, i) => (
                                        <button
                                            key={i}
                                            className={`py-2 px-1 -mb-[1px] ${
                                                i === 0 ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Book Details Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-gray-500 mb-1">Publish Date</h3>
                                    <p>{book.year}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-500 mb-1">Publisher</h3>
                                    <p className="text-orange-500">{book.publisher}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-500 mb-1">Language</h3>
                                    <p>{book.language}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-500 mb-1">Pages</h3>
                                    <p>{book.pages}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default BookDetails;