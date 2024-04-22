import React from "react";


const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
    // Additional questions
    {
        questionText: 'What is the largest planet in our solar system?',
        answerOptions: [
            { answerText: 'Earth', isCorrect: false },
            { answerText: 'Jupiter', isCorrect: true },
            { answerText: 'Mars', isCorrect: false },
            { answerText: 'Saturn', isCorrect: false },
        ],
    },
    {
        questionText: 'Who painted the Mona Lisa?',
        answerOptions: [
            { answerText: 'Vincent van Gogh', isCorrect: false },
            { answerText: 'Leonardo da Vinci', isCorrect: true },
            { answerText: 'Pablo Picasso', isCorrect: false },
            { answerText: 'Claude Monet', isCorrect: false },
        ],
    },
    {
        questionText: 'What year did the Titanic sink?',
        answerOptions: [
            { answerText: '1909', isCorrect: false },
            { answerText: '1912', isCorrect: true },
            { answerText: '1921', isCorrect: false },
            { answerText: '1933', isCorrect: false },
        ],
    },
    {
        questionText: 'Which country is commonly referred to as the "Land of the Rising Sun"?',
        answerOptions: [
            { answerText: 'China', isCorrect: false },
            { answerText: 'Japan', isCorrect: true },
            { answerText: 'South Korea', isCorrect: false },
            { answerText: 'Vietnam', isCorrect: false },
        ],
    },
    {
        questionText: 'Who wrote "Romeo and Juliet"?',
        answerOptions: [
            { answerText: 'William Shakespeare', isCorrect: true },
            { answerText: 'Charles Dickens', isCorrect: false },
            { answerText: 'Jane Austen', isCorrect: false },
            { answerText: 'Mark Twain', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the capital of Australia?',
        answerOptions: [
            { answerText: 'Sydney', isCorrect: false },
            { answerText: 'Melbourne', isCorrect: false },
            { answerText: 'Canberra', isCorrect: true },
            { answerText: 'Perth', isCorrect: false },
        ],
    },
    {
        questionText: 'Who discovered penicillin?',
        answerOptions: [
            { answerText: 'Alexander Fleming', isCorrect: true },
            { answerText: 'Marie Curie', isCorrect: false },
            { answerText: 'Albert Einstein', isCorrect: false },
            { answerText: 'Isaac Newton', isCorrect: false },
        ],
    },
    {
        questionText: 'Which planet is known as the Red Planet?',
        answerOptions: [
            { answerText: 'Earth', isCorrect: false },
            { answerText: 'Mars', isCorrect: true },
            { answerText: 'Venus', isCorrect: false },
            { answerText: 'Jupiter', isCorrect: false },
        ],
    },
    {
        questionText: 'Who wrote "The Great Gatsby"?',
        answerOptions: [
            { answerText: 'F. Scott Fitzgerald', isCorrect: true },
            { answerText: 'Ernest Hemingway', isCorrect: false },
            { answerText: 'John Steinbeck', isCorrect: false },
            { answerText: 'George Orwell', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the chemical symbol for water?',
        answerOptions: [
            { answerText: 'Wa', isCorrect: false },
            { answerText: 'H2O', isCorrect: true },
            { answerText: 'O2', isCorrect: false },
            { answerText: 'H2', isCorrect: false },
        ],
    },
    {
        questionText: 'Who was the first woman to win a Nobel Prize?',
        answerOptions: [
            { answerText: 'Marie Curie', isCorrect: true },
            { answerText: 'Rosalind Franklin', isCorrect: false },
            { answerText: 'Ada Lovelace', isCorrect: false },
            { answerText: 'Sally Ride', isCorrect: false },
        ],
    },
    {
        questionText: 'Which ocean is the largest?',
        answerOptions: [
            { answerText: 'Atlantic Ocean', isCorrect: false },
            { answerText: 'Indian Ocean', isCorrect: false },
            { answerText: 'Arctic Ocean', isCorrect: false },
            { answerText: 'Pacific Ocean', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the tallest mountain in the world?',
        answerOptions: [
            { answerText: 'Mount Kilimanjaro', isCorrect: false },
            { answerText: 'Mount Everest', isCorrect: true },
            { answerText: 'Mount Fuji', isCorrect: false },
            { answerText: 'Mount McKinley', isCorrect: false },
        ],
    },
    {
        questionText: 'Who painted the ceiling of the Sistine Chapel?',
        answerOptions: [
            { answerText: 'Leonardo da Vinci', isCorrect: false },
            { answerText: 'Raphael', isCorrect: false },
            { answerText: 'Michelangelo', isCorrect: true },
            { answerText: 'Donatello', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the capital of Canada?',
        answerOptions: [
            { answerText: 'Toronto', isCorrect: false },
            { answerText: 'Ottawa', isCorrect: true },
            { answerText: 'Montreal', isCorrect: false },
            { answerText: 'Vancouver', isCorrect: false },
        ],
    },
    {
        questionText: 'Who wrote "The Catcher in the Rye"?',
        answerOptions: [
            { answerText: 'J.D. Salinger', isCorrect: true },
            { answerText: 'F. Scott Fitzgerald', isCorrect: false },
            { answerText: 'Ernest Hemingway', isCorrect: false },
            { answerText: 'John Steinbeck', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the largest mammal in the world?',
        answerOptions: [
            { answerText: 'Elephant', isCorrect: false },
            { answerText: 'Blue whale', isCorrect: true },
            { answerText: 'Giraffe', isCorrect: false },
            { answerText: 'Hippopotamus', isCorrect: false },
        ],
    },
];


export default questions;