import {ContactsModel} from "../db/contactsModel.js"

export const getAllContacts = () => {
    const contacts = ContactsModel.find()
    return contacts
}

export const getContactById = (contactId) => {
    const contact = ContactsModel.findById(contactId)
    return contact
}

export const createContact = (payload) => {
    const contact = ContactsModel.create(payload);
    return contact
}

export const updateContact = async (contactId, payload, options = {}) => {
    const rawResult = await ContactsModel.findOneAndUpdate({ _id: contactId }, payload, { new: true, includeResultMetadata: true, ...options });
    if (!rawResult || !rawResult.value) return null;
    console.log(rawResult)
    return {
        contact: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
};

export const deleteContact = (contactId) => {
    const contact = ContactsModel.findOneAndDelete({ _id: contactId });
    return contact
}