import React from 'react';
import './style.css';

// объект, данные которого функция будет выводить
const user = {
    firstName: 'Ilia',
    lastName: 'Miheev',
    age: 16,
    city: 'Gus-Khrustalny',
    hobbies: 'programming',
    avatar: 'https://vk.com/id622860180',
};

// функция, которая спрягает слово "год" по падежам
const Age = () => {
    const getAgeString = () => {
        const age = user.age;
        if (!age) {
            return '';
        }
        const lastDigit = age % 10; // исправление 1: правильное определение последней цифры возраста
        if (age >= 11 && age <= 14) return `${age} лет`; // исправление 2: правило для чисел от 11 до 14 лет
        if (lastDigit === 1) {
            return `${age} год`;
        }
        if ([2, 3, 4].includes(lastDigit)) {
            return `${age} года`;
        }
        return `${age} лет`;
    };
    return <span>{getAgeString()}</span>; // исправление 3: обернуть результат в span
};

// функция, которая устанавливает разметку
const UserCard = ({ firstName, city, avatar, hobbies, lastName }) => {
    return (
        <div className="div">
            <form className="form">
                <h1 className="item">FirstName - {firstName}</h1>
                <h1 className="item">LastName - {lastName}</h1>
                <h2 className="item">
                    Age - <Age />
                </h2>
                <h2 className="item">City - {city}</h2>
                <h2 className="item">
                    Avatar - <a className="a" href={avatar}>{avatar}</a>
                </h2>
                <h2 className="item">Hobbies - {hobbies}</h2>
            </form>
        </div>
    );
};

// функция, которая рендерит разметку на страницу
const showUserCard = () => {
    return (
        <div>
            <UserCard {...user} />
        </div>
    );
};

export default showUserCard;