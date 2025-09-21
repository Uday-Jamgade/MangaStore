import React, { useState } from 'react';
import axios from 'axios';

const AddManga = () => {

    const headers={
        id: localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}` ,
      }
    
    const [formData, setFormData] = useState({
        url: '',
        title: '',
        auther: '',
        price: '',
        desc: '',
        language: '',
        category:'',
        genre:''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://mangastore-backend-1.onrender.com/api/v1/add-book', formData,{headers});
            setMessage('Book added successfully!');
        } catch (error) {
            setMessage('Error adding book');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl  font-bold mb-4 text-white">Add Book</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300">URL</label>
                    <input
                        type="text"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        className="mt-1 block w-full text-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 text-white py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Author</label>
                    <input
                        type="text"
                        name="auther"
                        value={formData.auther}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 text-white py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 text-white py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Description</label>
                    <textarea
                        name="desc"
                        value={formData.desc}
                        onChange={handleChange}
                        className="mt-1 block w-full text-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Language</label>
                    <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="mt-1 block w-full text-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
               <div>
                      <label className="block text-sm font-medium text-gray-300">Category</label>
                       <select
                       name="category"
                         value={formData.category}
                        onChange={handleChange}
                         className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        >
                        <option value="">Select a category</option>
                     <option value="Biography">Biography</option>
                    <option value="Novel">Novel</option>
                     <option value="Manga">Manga</option>
                      </select>
                    </div>

                    <div>
  <label className="block text-sm font-medium text-gray-300">Genre</label>
  <select
    name="genre"
    value={formData.genre}
    onChange={handleChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  >
    <option value="">Select a genre</option>
    <option value="Adventure">Adventure</option>
    <option value="Mystery">Mystery</option>
    <option value="Biography">Biography</option>
    <option value="Self-Help">Self-Help</option>
    <option value="Health">Health</option>
    <option value="Travel">Travel</option>
    <option value="Thriller">Thriller</option>
    <option value="Dystopia">Dystopia</option>
    <option value="Fantasy">Fantasy</option>
    <option value="Romance">Romance</option>
    <option value="History">History</option>
    <option value="Horror">Horror</option>
    <option value="Science-Fiction">Science-Fiction</option>
    <option value="Philosophy">Philosophy</option>
  </select>
</div>

                <button
                    type="submit"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add Book
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default AddManga;
