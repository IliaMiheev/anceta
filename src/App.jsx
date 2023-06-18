import React, { useState } from 'react';

const Age = () => {
    const [age, setAge] = useState('');

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const getAgeString = () => {
        if (!age) return '';
        const lastDigit = parseInt(age[age.length - 1]);
        if (lastDigit === 1 && age !== '11') return `${age} год`;
        if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(parseInt(age))) return `${age} года`;
        return `${age} лет`;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <input
                type="text"
                value={age}
                onChange={handleAgeChange}
                className="w-64 p-2 border border-gray-400 rounded-lg"
                placeholder="Enter your age"
            />
            <p className="text-2xl mt-4">{getAgeString()}</p>
        </div>
    );
};

export default Age;