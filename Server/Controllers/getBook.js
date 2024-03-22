
const { Book } = require ("../db");

const getBook = async (req, res) => {

    const {Title, Autor, YearOfPublication, Editorial, Language} = req.body;
    
    try {
        if (!Title || !Autor || !YearOfPublication || !Editorial || !Language) {
            throw new Error('Faltan Datos!');
        }
        const book = await Book.findOrCreate({where: {Title, Autor, YearOfPublication, Editorial, Language}})
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getBook;