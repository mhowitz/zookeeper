const fs = require('fs');
jest.mock('fs');
const{ 
    filterByQuery, 
    findById,
    createNewAnimal,
    validateAnimal
} = require('../lib/animals');

const{ animals } = require('../data/animals.json');
const { hasUncaughtExceptionCaptureCallback } = require('process');

test('creates an animal object', () => {
    const animal = createNewAnimal(
        { name: "Darlene", id: "kasdjfd33" },
        animals
    );
    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("kasdjfd33");
});

test('filter by querey', () =>{
    const startingAnimlas= [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
          },
          {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
          },
    ];

    const updatedAnimals = filterByQuery({ species: "gorilla" }, startingAnimlas);
    expect(updatedAnimals.length).toEqual(1);

});

test('finds by id', () => {
    const startingAnimlas = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
          },
          {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
          },
    ];
    const result = findById("3", startingAnimlas);

    expect(result.name).toBe("Erica");

});

test('validates personality traits', () => {
    const animal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
    };

    const invalidAnimal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);

});

