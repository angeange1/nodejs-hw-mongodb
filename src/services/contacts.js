import {ContactsModel} from "../db/contactsModel.js"

export const getAllContacts = () => {
    const contacts = ContactsModel.find()
    return contacts
}

export const getContactById = (contactId) => {
    const contact = ContactsModel.findById(contactId)
    return contact
}