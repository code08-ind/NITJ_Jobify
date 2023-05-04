// to keep all the callback functions in this folder and files
import Message from '../model/messageSchema.js';

/* addMessage controller function */
export const addMessage = async (request, response) => {
    const message = request.body;
    const newMessage = new Message(message);

    try {
        await newMessage.save();
        response.status(201).json(newMessage);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* getMessages controller function */
export const getMessages = async (request, response) => {
    try {
        const messages = await Message.find({});
        response.status(200).json(messages);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* deleteMessage controller function */
export const deleteMessage = async (request, response) => {
    try {
        await Message.deleteOne({ _id: request.params.id });
        response.status(200).json({message:'Message deleted successfully'});
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}