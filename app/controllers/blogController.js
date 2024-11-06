//create blog

export const createblog = async (req, res) => {
    return res.json({ message: 'Blog created successfully.' });
}

//read blog

export const readblog = async (req, res) => {
    return res.json({ message: 'Blog readed successfully.' });
}

//update blog

export const updateblog = async (req, res) => {
    return res.json({ message: 'Blog updateed successfully.' });
}

//delete blog

export const deleteblog = async (req, res) => {
    return res.json({ message: 'Blog deleteed successfully.' });
}